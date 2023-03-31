
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  beverages: [],
  vegetables: [],
  nuts: [],
  eggs:[],
  fruits: [],
  cartItems:  [],
  likes: 0,
  totalPrice: 0,
  countGood: 0,
  status: null,
  error: null,
  productsName: '',
};

export const fetchGoods = createAsyncThunk(
  'orderCreator/fetchGoodsStatus',
  async (params) => {

    const { newArr } = params;
    const { data } = await axios.get(newArr);

    return data;
  }
)

const orderCreatorSlice = createSlice({
  name: "orderCreator",
  initialState,
  reducers: {
    beverages: (state, action) => {
      const currentName = adaptedName(action.type)
      state.beverages = action.payload;
      state.productsName = currentName;
    },
    eggs: (state, action) => {
      const currentName = adaptedName(action.type)
      state.eggs = action.payload;
      state.productsName = currentName;
    },
    fruits: (state, action) => {
      const currentName = adaptedName(action.type)
      state.fruits = action.payload;
      state.productsName = currentName;
    },
    vegetables: (state, action) => {
      const currentName = adaptedName(action.type)
      state.vegetables = action.payload;
      state.productsName = currentName;
    },
    nuts: (state, action) => {
      const currentName = adaptedName(action.type)
      state.nuts = action.payload;
      state.productsName = currentName;
    },
    addedGoodInCart: (state, action) => {
      const resultState = updatingCart(state, action);
      state.cartItems = resultState.cartItems;
      return state;
    },
    addGoodInCart: (state, action) => {
      const resultState = apdateItem(state, action, 1);
      state.cartItems = resultState.cartItems;
      return state;
    },
    removeGoodInCart: (state, action) => {
      const resultState = apdateItem(state, action, -1);
      state.cartItems = resultState.cartItems;
      return state;
    },
    addLikes: (state) => {
      state.likes += 1
      return state;
    },
    decLikes: (state) => {
      state.likes -= 1
      return state;
    },
    deleteGood: (state, action) => {
      const results = del(state, action);
      state.cartItems = results.cartItems;
      return state;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoods.fulfilled, (state, action) => {
      state.beverages = action.payload;
      state.nuts = action.payload;
      state.fruits = action.payload;
      state.vegetables =  action.payload;
      state.eggs =  action.payload;
      state.status = 'success';

      state.productsName = action.meta.arg.newArr.substring(44,action.length).split('?')[0]
    });
    builder.addCase(fetchGoods.pending, (state) => {
      state.status = 'loading';
      state.beverages =  [];
      state.nuts =  [];
      state.fruits =  [];
      state.vegetables =  [];
      state.eggs =  [];

    });
    builder.addCase(fetchGoods.rejected, (state) => {
      state.status = 'error';
      state.beverages =  [];
      state.nuts =  [];
      state.fruits =  [];
      state.vegetables =  [];
      state.eggs =  [];
    });
  }


})

const adaptedName = (actionName) => {
  return actionName.substring(13, actionName.length)
}

const apdateItem = (state, action, amount) => {
  const goodInCart = state.cartItems.find((item) => action.payload.id === item.id);

  if (goodInCart) {
    const cartItems = state.cartItems.map((item) => {
      if (item.id === goodInCart.id) {
        item.count += 1 * amount;
        item.total += item.price * amount;
        state.totalPrice += item.price * amount;
      }
      return item;
    });
    if (!goodInCart.count) {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== goodInCart.id)
      }
    }
    return {
      ...state,
      cartItems,
    };
  }
}

const del = (state, action) => {
  const goodId = action.payload.id;

  const count = state.cartItems.find((item) => goodId === item.id);

  state.totalPrice -= (count.price * count.count);
  const cartItems = state.cartItems.filter((item) => item.id !== goodId)
  return {
    ...state,
    cartItems,
  }
}

const updatingCart = (state, action) => {
    const goodId = action.payload.id ;
  const count = action.payload.count;

  const good = state[state.productsName].find((item) => goodId === item.id);


  const newItem = {
    id: good.id,
    name: good.title,
    count: count || 1,
    price: good.price,
    total: good.price * count,
    array: state.productsName,
  };


const cartItems = state.cartItems.concat(newItem);

  const goodInCart = state.cartItems.find((item) => goodId === item.id);

  if (goodInCart) {
    const cartItems = state.cartItems.map((item) => {
      if (item.id === goodId) {
        item.count += count;
        item.total += item.price * count;
        state.totalPrice += item.price * count;
      }
      return item;
    });
    return {
      ...state,
      cartItems,
    };
  } else {
    state.totalPrice += (good.price * count);
  }

  return {
    ...state,
    cartItems,
  };
};

export const { beverages, addedGoodInCart,addGoodInCart, removeGoodInCart, addLikes, decLikes, incCountGood, decCountGood, deleteGood, nuts, vegetables, fruits, eggs } =
  orderCreatorSlice.actions;

export default orderCreatorSlice.reducer;