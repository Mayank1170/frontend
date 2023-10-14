import { useAtom } from "jotai";
import useDexterity from "./useDexterity";
import { selectedProductAtom } from "@/store/atoms";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useTRGs from "./useTRGs";
import { useWallet } from "@solana/wallet-adapter-react";
import { getOpenOrders } from "@/utils/dexterity";

const useProducts = () => {
  const { products, manifest } = useDexterity();
  const { trgs } = useTRGs();
  const { publicKey } = useWallet();
  const [selectedProduct, setSelectedProduct] = useAtom(selectedProductAtom);

  useEffect(() => {
    if (!selectedProduct && products) {
      setSelectedProduct(Object.keys(products)[0]);
    }
  }, [products, selectedProduct]);

  const { data: openOrders } = useQuery({
    queryKey: ["openOrders", selectedProduct],
    queryFn: async () => {
      return await getOpenOrders(manifest!, trgs![0].pubkey, selectedProduct!);
    },
    enabled:
      !!manifest &&
      !!publicKey &&
      !!manifest.fields.wallet?.publicKey &&
      !!trgs &&
      !!selectedProduct &&
      trgs.length > 0,
  });

  return { products, selectedProduct, setSelectedProduct, openOrders };
};

export default useProducts;
