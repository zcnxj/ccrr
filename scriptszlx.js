"use strict";
//餐馆的对象：名称，地址，菜品，价格
const restaurant = {
  name: "happyEating",
  Location: "china",
  menu: ["开胃小菜", "海鲜", "牛排"],
  price: [20, 40, 60],
  //   对象设置函数参数就是下表数字
  order: function (index) {
    // 返回menu和price两个数组当中下标所对应的参数
    return [this.menu[index], this.price[index]];
  },
};
document.querySelector("img").classList.add("hidden");
// 定义常量按钮
const btn = document.querySelector(".buttons");
let total = 0;
// 给按钮添加点击事件
btn.addEventListener("click", function () {
  // 获取用户输入的内容
  let number = document.querySelector(".input1").value;
  console.log(restaurant.order(number));
  //   定义变量数组m，p执行order就给number的参数
  let [m, p] = restaurant.order(number);
  console.log(m, p);
  //   根据用户输入的数据显示哪一张图
  document.querySelector("img").src = `meishi-${number}.png`;
  document.querySelector("img").classList.remove("hidden");
  total += p;
  console.log(total);
  document.querySelector("p").textContent = `你已点取一份${m},单价${p}元`;
  document.querySelector("h1").textContent = `您当前总计消费：${total}元`;
  document.getElementById("input").value = "";
  input.focus();
});
