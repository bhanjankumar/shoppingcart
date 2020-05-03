import React,{PureComponent} from 'react';


class CheckoutComponent extends PureComponent{
    constructor(){
        super();
        this.sate={
            
        }
    }
    increase = (e,refData,data) => {
        this.refs[refData].value++;
        let prodData = this.props.addedCartData;
        for(let i=0;i<prodData.length;i++){
            if(data.id==prodData[i].id){
                prodData[i] = Object.assign(prodData[i],{quantity:this.refs[refData].value})
            }
        }
        this.props.cartIncrease(data.id,this.refs[refData].value,prodData);
    }
    decrease = (e,refData,data) => {
        this.refs[refData].value--;
        let prodData = this.props.addedCartData;
        for(let i=0;i<prodData.length;i++){
            if(data.id==prodData[i].id){
                prodData[i] = Object.assign(prodData[i],{quantity:this.refs[refData].value})
            }
        }
        this.props.cartIncrease(data.id,this.refs[refData].value,prodData);
    }
    getRightPriceDetail = () => {
        const {addedCartData} = this.props;
        let totalDisplay  = 0;
        let totalPriceactual  = 0;
        if(addedCartData){
        for(let i=0;i<addedCartData.length;i++){
            totalDisplay += addedCartData[i].price.display*addedCartData[i].quantity;
            totalPriceactual += addedCartData[i].price.actual*addedCartData[i].quantity;
        }
    }
        let totalDiscount = totalDisplay - totalPriceactual;
        let totProd = addedCartData ? addedCartData.length:0;
        return(
            <div className="right-pricedetail">
                 <h2>Price details</h2>
                     <div className="priceDetInner">
                    <div>Price ({totProd} item): {totalPriceactual}</div>
                    <div>Discount: {totalDiscount}</div>
                    </div>
                    <div className="total">Total: {totalPriceactual}</div>
            </div>
        )
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
  

    render(){
        const {addedCartData} = this.props;
        return(
            <div className="checkoutPage">
                <div className="container">
  			        <div className="row">
  				        <div className="col-md-8">
                          {addedCartData && addedCartData.map((data, index) => (
                          <div className="row check-brder">
                             <div className="cartimg">
                                <img src={data.image} />
                            </div>
                            <div className="checout-right">
                            <div className="counter">
                                  <div><span >{data.name}</span></div>
                                   <div> <span >{data.price.actual} </span><span className="display"><del>{data.price.display}</del></span><span className="discount">{data.discount}% off</span></div>
                                </div>
                              <div className="counter">
                                <button className="roundbtn" onClick={(e)=>this.decrease(this,'cartVal_'+index,data,data)}>-</button>
                                <input type="text" ref={'cartVal_'+index} value={data.quantity?data.quantity:1}  />
                                <button className="roundbtn" onClick={(e)=>this.increase(this,'cartVal_'+index,data)}>+</button>
                              </div>
                                <div className="counter remove">
                                    <span onClick={()=>this.props.removeCart(addedCartData,data.id)}>Remove</span>
                               </div>
                               </div>
                            </div>
                          ))}
                       </div>
                       <div className="col-md-4">
                           {this.getRightPriceDetail()}
                             
                        </div>
                    </div>
                   
                </div>
  			        
            </div>
        )
    }
}

export default CheckoutComponent;