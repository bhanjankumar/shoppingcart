import React,{PureComponent} from 'react';


class SearchComponent extends PureComponent{
    constructor(){
        super();
        this.enterSearch = this.enterSearch.bind(this);
        this.state={
            searchData:''
        }
    }

    changeData(e){
        this.setState({
            searchData:e.target.value
        })
    }
    searchGetProduct(productData){
        this.props.searchGetProduct(productData,this.state.searchData)
    }
    enterSearch(event){
        if(event.key === 'Enter' && this.state.searchData){
            this.props.searchGetProduct(this.props.productData,this.state.searchData)
        }
    }

    render(){
        const {productData} = this.props;
        return(
            <div className="seachFilter">
                <div class="example" >
                <input type="text" onChange = {(e)=>this.changeData(e)} onKeyPress={this.enterSearch} placeholder="Search.." name="search" />
                <button onClick={()=>this.searchGetProduct(productData)} type="image"><i class="fa fa-search"></i></button>
                </div>
            </div>
        )
    }
}

export default SearchComponent;