import dynamic from 'umi/dynamic';

const delay = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));
const len = 5;
// 异步加载组件的方法
export default dynamic({
  loader: async function () {
    await delay(/* 1s */len * 1000);
    return () => <div>I will render after {len}s</div>;
  },
});
