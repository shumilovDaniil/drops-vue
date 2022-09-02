import{r as s,u as y,o as d,c as m,d as e,w as r,v as _,e as b,f as x,a as p,g as V,h as k,F as P,b as w,H as C}from"./index.ade14de0.js";import{D as S}from"./drops-button.72e511c3.js";const U=e("h2",{class:"title"},"Add form",-1),A=["onSubmit"],B={class:"form__block"},D=e("label",{for:"title"},"Title",-1),F={class:"form__block"},N=e("label",{for:"category"},"Tag",-1),T={class:"form__block"},M=e("label",{for:"price"},"Price",-1),$={class:"form__block"},H=e("label",{for:"image"},"Upload image",-1),R=["value"],E={class:"form__block"},I=e("label",{for:"selectRole"},"Chose your account",-1),Y=e("option",{value:"admin"},"Admin",-1),j=e("option",{value:"user"},"Danya Shumilov",-1),q=[Y,j],z={key:0,class:"error__permission"},G=w("Create product"),J={__name:"AddProductForm",setup(v){const a=s(""),l=s(""),c=s(0),u=s(""),n=s(""),f=y();function h(i){u.value=i.target.value}function g(){const i={title:a.value,category:l.value,price:c.value,image:u.value,role:n.value};f.$patch(t=>{t.products.push(i)})}return(i,t)=>(d(),m(P,null,[U,e("form",{onSubmit:k(g,["prevent"]),class:"form",action:""},[e("div",B,[D,r(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),id:"title",type:"text"},null,512),[[_,a.value]])]),e("div",F,[N,r(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>l.value=o),id:"category",type:"text"},null,512),[[_,l.value]])]),e("div",T,[M,r(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>c.value=o),id:"price",type:"number"},null,512),[[_,c.value]])]),e("div",$,[H,e("input",{onChange:h,value:u.value,id:"image",type:"file"},null,40,R)]),e("div",E,[I,r(e("select",{"onUpdate:modelValue":t[3]||(t[3]=o=>n.value=o),id:"selectRole"},q,512),[[b,n.value]]),n.value==="user"?(d(),m("span",z," You don't have permission for this account ")):x("",!0)]),p(S,null,{default:V(()=>[G]),_:1})],40,A)],64))}};const K={class:"container"},Q={__name:"ProductView",setup(v){return(a,l)=>(d(),m("div",K,[p(C),p(J)]))}};export{Q as default};