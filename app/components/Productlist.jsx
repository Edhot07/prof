
import ArrangedProduct from './ArrangedProduct'
import { getDatas } from '../utils/funDatas';

const ProductLists = async () => {
  const products = await getDatas();
  // console.log(products)
  return (
    <div>
      <ArrangedProduct products={products} />
    </div>
  );
};

export default ProductLists;
