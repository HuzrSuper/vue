
 var vue= new Vue({
        el: '#shopping-cart',
        data: {
            productList: [
                {
                    'pro_name': '【斯文】甘油 | 丙三醇',//产品名称
                    'pro_brand': 'skc',//品牌名称
                    'pro_place': '韩国',//产地
                    'pro_purity': '99.7%',//规格
                    'pro_min': "215千克",//最小起订量
                    'pro_depot': '上海仓海仓储',//所在仓库
                    'pro_num': 3,//数量
                    'pro_img': '../../images/ucenter/testimg.jpg',//图片链接
                    'pro_price': 800//单价
                },
                {
                    'pro_name': '【斯文】甘油 | 丙三醇',//产品名称
                    'pro_brand': 'skc',//品牌名称
                    'pro_place': '韩国',//产地
                    'pro_purity': '99.7%',//规格
                    'pro_min': "215千克",//最小起订量
                    'pro_depot': '上海仓海仓储',//所在仓库
                    'pro_num': 3,//数量
                    'pro_img': '../../images/ucenter/testimg.jpg',//图片链接
                    'pro_price': 800//单价
                },
                {
                    'pro_name': '【斯文】甘油 | 丙三醇',//产品名称
                    'pro_brand': 'skc',//品牌名称
                    'pro_place': '韩国',//产地
                    'pro_purity': '99.7%',//规格
                    'pro_min': "215千克",//最小起订量
                    'pro_depot': '上海仓海仓储',//所在仓库
                    'pro_num': 3,//数量
                    'pro_img': '../../images/ucenter/testimg.jpg',//图片链接
                    'pro_price': 800//单价
                }
            ]
        },
        computed: {
            //检测是否全选
            isSelectAll:function(){
                //如果productList长度为0
                if(this.productList.length===0){return false;}
                //如果productList中每一条数据的select都为true，返回true，否则返回false;
                return this.productList.every(function (val) { return val.select});
            },
            //获取总价和产品总件数
            getTotal:function(){
                //获取productList中select为true的数据。
                var _proList=this.productList.filter(function (val) { return val.select}),totalPrice=0;
                for(var i=0,len=_proList.length;i<len;i++){
                    //总价累加
                    totalPrice+=_proList[i].pro_num*_proList[i].pro_price;
                }
                //选择产品的件数就是_proList.length，总价就是totalPrice
                return {totalNum:_proList.length,totalPrice:totalPrice}
            }
        },
        methods: {
            //全选与取消全选
            selectProduct:function(_isSelect){
                //遍历productList，全部取反
                for (var i = 0, len = this.productList.length; i < len; i++) {
                    this.productList[i].select = !_isSelect;
                }
            },
            //删除已经选中(select=true)的产品
            deleteProduct:function () {
                this.productList=this.productList.filter(function (item) {return !item.select})
            },
            //删除单条产品
            deleteOneProduct:function (index) {
                //根据索引删除productList的记录
                this.productList.splice(index,1);
            },
        },
        mounted: function () {
            var _this=this;
            //为productList添加select（是否选中）字段，初始值为true
            this.productList.map(function (item) {
                _this.$set(item, 'select', false);
            })
        }
    })
