<template>
  <a-table :columns="columns" :data-source="data" bordered size="middle" :rowClassName="className">
	<template slot="homeToken" slot-scope="text,record,index">
		<a-switch :defaultChecked="text" @change="tokenChange" @click="tokenClick(text,record,index)"></a-switch>
		{{text}}-{{record}}-{{index}}
	</template>
	<template slot="homeRoles" slot-scope="text,record,index" >
		
		<li v-for="(tag,i) in text" :key="i" >
		<a-checkable-tag :key="tag" :checked="tagcheck(tag)">{{tag}}</a-checkable-tag>			
		</li>
		<br>
		<li v-for="(tag,ind) in tagRoles" :key="'f-'+ind" >
		<a-checkable-tag v-if="tagif(text,tag)" :key="tag" @change="checked => tagchengef(tag,checked)">{{tag}}</a-checkable-tag>			
		</li>
		<br>
		
		<li v-for="(tag,ind) in tagRoles" :key="'t-'+ind" >
		<a-checkable-tag style="margin-top:5px" :key="tag" :checked="roleCheck(text,tag)" @change="checked => tagchengef(tag,checked,index)">3{{tag}}</a-checkable-tag>			
		</li>
	
	</template>
    <template
      v-for="col in ['name', 'age', 'address']"
      :slot="col"
      slot-scope="text, record, index"
    >
      <div :key="col">
        <a-input
          v-if="record.editable"
          style="margin: -5px 0"
          :value="text"
          @change="e => handleChange(e.target.value, record.key, col)"
        />
        <template v-else>
          {{ text }}
        </template>
      </div>
    </template>
    <template slot="operation" slot-scope="text, record, index">
      <div class="editable-row-operations">
        <span v-if="record.editable">
          <a @click="() => save(record.key)">Save</a>
          <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a :disabled="editingKey !== ''" @click="() => edit(record.key)">Edit</a>
        </span>
      </div>
    </template>
  </a-table>
</template>

<script>
const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    width: '15%',
    scopedSlots: { customRender: 'name' },
	rowClassName:'25px'
  },
  {
    title: 'age',
    dataIndex: 'age',
    width: '15%',
    scopedSlots: { customRender: 'age' },
	rowClassName:'25px'
  },
  {
    title: 'address',
    dataIndex: 'address',
    width: '10%',
    scopedSlots: { customRender: 'address' },
	rowClassName:'25px'
  },
  {
	  title:'homeToken',
	  dataIndex:'homeToken',
	  width:'10%',
	  scopedSlots:{customRender:'homeToken'},
	  rowClassName:'25px'
	  
  },
  {
	  title:'homeRoles',
	  dataIndex:'homeRoles',
	  width:'20%',
	  scopedSlots:{customRender:'homeRoles'},
	  rowClassName:'25px'
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
	rowClassName:'25px'
  },
];

const data = [];

const role=[
	  	"create-realm",
	  	"offline_access",
	  	"uma_authorization",
	  	"admin",
		"authorization"
	  ]
for (let i = 0; i < 5; i++) {
  const max = parseInt(Math.random()*4,10)+1
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
	homeToken:true,
	homeRoles:role.slice(0,max)
  });
}
export default {
  data() {
    this.cacheData = data.map(item => ({ ...item }));
    return {
      data,
      columns,
      editingKey: '',
	  tags: ['Unremovable', 'Tag 2', 'Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3'],
	  inputVisible: false,
	  inputValue: '',
	  switchtf:'',
	  tagRoles:[
	  	"create-realm",
	  	"offline_access",
	  	"uma_authorization",
	  	"admin"
	  ],
	  tagtrue:{ 
		  "create-realm":false,
	  	"offline_access":true,
	  	"uma_authorization":false,
	  	"admin":true 
		},
		tagtf:[],
		shuju:[],
		
	  
    };
  },
  computed: {	  
	  tagRolesA(){
		  this.tagRoles
	  },
  	dataobj() {
		const dataA = this.data.push()
  		return this.data 
  	}
  },
	  
  methods: {
	  className(record, index){
		  record.csbsType ==='不限范围'?'csbsTypes':''
		  
	  },
	  tokenClick(checked,e,text){
		  console.log(checked);
		  console.log(e);
		  console.log(text);
		 this.data[text]['homeToken'] = this.switchtf
			   },
	  tokenChange(checked,event){
		   console.log(`a-switch to ${checked}`);
		   console.log(event);
		   this.switchtf = checked
		  // console.log(t);
		   //this.data[t]['homeToken'] = checked
	  },
	  roleCheck(text,tag){
		  console.log(text);
		  console.log(tag);
		  return text ? text.indexOf(tag) > -1:false
		  
	  },
	  /**
	   * @param {String} t tag
	   * @param {Bool} c checked
	   * @param {Number} i index
	   */
	  tagchengef(t,c,i){
		  console.log(t);
		  console.log(c);
		  console.log(i);
		  //console.log(k);		  
		  const d = this.data[i]['homeRoles'].indexOf(t)
		  console.log(d);
		  const e = c?this.data[i]['homeRoles'].push(t):this.data[i]['homeRoles'].splice(d,1)
		  console.log(e);
	  },
	  tagif(t,tag){
		  /* console.log(t);
		  console.log(tag); */
		  return t.indexOf(tag) == -1
		  
	  },
	  tagcheck(t){
		  return this.tagRoles.indexOf(t) > -1
	  },
	tagRolesobj(t){
		const arr = []
		t.forEach((item,index)=>{			 
			 const obj = {}
			 obj[item]=false
			 arr.push(obj)
			 console.log(arr);
			 return arr
			
		})
	},
	  
	tagobject(var1,var2,str){
		const var3={}
		for(let i=0;i<var1.length; i++){
			//const tf =  == var2[`${i}`]
			const tf = var2.includes(var1[`${i}`])
			console.log(tf);
			var3[var1[i]]= tf
		}
		console.log(var3);
		//this.tagtf=var3
		return var3[str]
	},
	tagChange(){
		console.log(`tagChange`);
		console.log(this.tagtrue);
	},
	 //tag start
	handleClose(removedTag) {
	      const tags = this.tags.filter(tag => tag !== removedTag);
	      console.log(tags);
	      this.tags = tags;
	    },
	
	    showInput() {
	      this.inputVisible = true;
	      this.$nextTick(function() {
	        this.$refs.input.focus();
	      });
	    },
	
	    handleInputChange(e) {
	      this.inputValue = e.target.value;
	    },
	
	    handleInputConfirm() {
	      const inputValue = this.inputValue;
	      let tags = this.tags;
	      if (inputValue && tags.indexOf(inputValue) === -1) {
	        tags = [...tags, inputValue];
	      }
	      console.log(tags);
	      Object.assign(this, {
	        tags,
	        inputVisible: false,
	        inputValue: '',
	      });
	    },
	  
	//tag end  
	  
	  
	  
	  
	  
	  
	//switch start  
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      this.editingKey = key;
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    save(key) {
      const newData = [...this.data];
      const newCacheData = [...this.cacheData];
      const target = newData.filter(item => key === item.key)[0];
      const targetCache = newCacheData.filter(item => key === item.key)[0];
      if (target && targetCache) {
        delete target.editable;
        this.data = newData;
        Object.assign(targetCache, target);
        this.cacheData = newCacheData;
      }
      this.editingKey = '';
    },
    cancel(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      this.editingKey = '';
      if (target) {
        Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
        delete target.editable;
        this.data = newData;
      }
    },
	//switch end
  },
  mounted() {
	  
  	
  }
};
</script>

<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
::v-deep .ant-table{
	font-size: 25px;
}
/* /deep/ .ant-table {
     font-size: 25px;
    } */
</style>
