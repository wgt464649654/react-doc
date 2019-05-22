
<div id="#imgLoader" />
:::demo

```js
constructor(props) {
    super(props);
    this.state = {
        result: undefined,
        url: 'https://avatars1.githubusercontent.com/u/23623491?s=40&v=4'
    }
    this.getImg = this.getImg.bind(this);
}

componentDidMount() {
    // 为了看出差异性，这里延迟了一秒再去加载
    setTimeout(() => {
        this.getImg();
    }, 1000);
}

async getImg() {
    // try {
    //     await imgLoader(this.state.url);
    //     this.setState({result: 'success'});
    //     message.success('加载成功')
    // } catch (error) {
    //     this.setState({result: 'fail'});
    // }
}

render() {
    const { result, url } = this.state;
    const dom = result === 'success' ? <img src={url} /> : 
        result === 'fail' ? '加载失败' : 
        '正在加载...'
    return (
        <div>
            {dom}
        </div>
    )
}
```
:::