import React,{PureComponent} from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import SortComponent from '../../sort/sort-container';

class HomeComponent extends PureComponent{
    constructor(){
        super();
        this.state={
            products:null,
            value: { min: 4000, max: 90000 },
            classEnable:false,
            sortPop:true,
            filterPop:false,
            filterSortData:'priceHL'
        }
        
    }

    componentDidMount(){
        this.props.getProducts();
    }
    sortPop(){
        this.setState({
            classEnable:true,
            sortPop:true,
            filterPop:false
        })
    }
    filterPop(){
        this.setState({
            classEnable:true,
            sortPop:false,
            filterPop:true
        })
    }
    applyFilter(productData,val){
        this.setState({
            classEnable:false
        })
        this.props.applyFilter(productData,val);
    }

    filterOption(filterSort){
        if(filterSort=='priceHL'){
            this.setState({
                filterSortData:'priceHL'
            })
        }else if(filterSort=='priceLH'){
            this.setState({
                filterSortData:'priceLH'
            })
        }else if(filterSort=='discount'){
            this.setState({
                filterSortData:'discount'
            })
        }
        
    }
    applyFilterPop(){
        const {productData} = this.props;
        if(this.state.filterSortData=='priceHL'){
            this.props.descendingPrice(productData);
        }else if(this.state.filterSortData=='priceLH'){
            this.props.ascendingPrice(productData);
        }else if(this.state.filterSortData=='discount'){
            this.props.discountPrice(productData);
        }
        this.setState({
            classEnable:false
        })
    }
    onCancel(){
        this.setState({
            classEnable:false,
            sortPop:false,
            filterPop:false
        })
    }

    render(){
        const {productData} = this.props;
        return(
    <div className="content">
        {this.state.classEnable &&
        <div className="bgmobile"></div>
        }
  		<div className="container">
  			<div className="row">
              <div className="col-md-12 p-0 mbl-filt">
                <div className="mbl-filter">
                        <div className="sort" onClick={()=>this.sortPop()}>Sort</div>
                        <div className="filter" onClick={()=>this.filterPop()}>Filter</div>
                    </div>
                </div>
  				<div className="col-md-3 mbl">
                  <div className={this.state.classEnable?'mbl-sortFilter mblshow':'mbl-sortFilter'}>
  					<div className="control-box p-3 filter">
                    {this.state.sortPop &&
                     <div className="filter-mobile ">
  						<h2>Filter</h2>
                          <InputRange
                            maxValue={90000}
                            minValue={4000}
                            value={this.state.value}
                            onChange={value => this.setState({ value })} />
                        <div className="btn-list">
                            <div className="cancelBtn mblshow">
                            <button onClick={()=>this.onCancel()}>Cancel</button>
                            </div>
                            <div className="applyBtn">
                                <button onClick={()=>this.applyFilter(productData,this.state.value)}>Apply</button>
                            </div>
                        </div>
                    </div>
                    }
                    {this.state.filterPop &&
                    <div className="filter-pop">
                        <h3>Sort Option</h3>
                        <label className="radio">Price -- High Low
                        <input type="radio" name="price"  value="priceHL" onClick={()=>this.filterOption('priceHL')} />
                        <span class="checkmark"></span>
                        </label>
                        <label className="radio">Price -- Low High
                        <input type="radio" name="price"  value="priceLH" onClick={()=>this.filterOption('priceLH')} />
                        <span class="checkmark"></span>
                        </label>
                        <label className="radio">Discount
                        <input type="radio" name="price" value="discount" onClick={()=>this.filterOption('discount')} />
                        <span class="checkmark"></span>
                        </label>
                        <div className="btn-list">
                            <div className="cancelBtn">
                            <button onClick={()=>this.onCancel()}>Cancel</button>
                            </div>
                            <div className="applyBtn">
                                    <button onClick={()=>this.applyFilterPop(productData)}>Apply</button>
                            </div>
                        </div>
                    </div>
                    }
                 </div>
  				</div>
  				</div>
  				<div className="col-md-9">
                      <SortComponent />
                    <div className="container-fluid">
                    <div className="row">
                    {productData && productData.map((data, index) => (
                      <div className="col-md-3 col-sm-6 col-6 px-1" key={index}>
                          <div className="products">
                            <img src={data.image} />
                            <div className="title">{data.name}</div>
                            <div><span className="actual">{data.price.actual}</span> <span className="display"><del>{data.price.display}</del></span><span className="discount">{data.discount}% off</span></div>
                            <button onClick={()=>this.props.addCard(data)} >Add To Cart</button>
                          </div>
                      </div>
                    ))}
                    </div>
                    </div>
  				</div>
  			</div>
  		</div>
  	</div>
        )
    }
}

export default HomeComponent;