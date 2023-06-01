---
id: commonly-used-util.js
slug: /commonly-used-util.js
title: 常用util.js
date: 2020-10-21
authors: littletaoist
tags: [js, util]
keywords: [js, util]
---

记录一下自己在 js 学习中用到的一些工具

<!-- truncate -->

#### 数值库

##### `math.js`

对于具有任意精度的计算，math.js支持`BigNumber` 数据类型。BigNumber支持由 [decimal.js](https://github.com/MikeMcl/decimal.js/)支持 。

###### 用法

可以使用以下函数创建BigNumber `bignumber`:

```
math.bignumber('2.3e+500') // BigNumber, 2.3e+500
```

大多数函数可以根据输入的类型确定输出的类型：作为输入的数字将返回数字作为输出，作为输入的BigNumber将返回BigNumber作为输出。无法确定来自输入的输出类型的函数（例如`math.evaluate`）使用默认数字类型`number`，可以在实例化math.js时对其进行配置。要在默认情况下配置使用BigNumbers而不是[numbers](https://www.mathjs.cn/docs/datatypes/numbers.html) ，请配置math.js如下：

```js
math.config({
  number: 'BigNumber',      // 默认的数字类型:
                            // 'number' (默认), 'BigNumber', 或 'Fraction'
  precision: 64             // 大数的有效位数
})

// 使用 math
math.evaluate('0.1 + 0.2')  // BigNumber, 0.3
```

BigNumber的默认精度为64位数字，可以使用选项进行配置 `precision`.

###### 支持

math.js中的大多数函数都支持BigNumbers，但并非全部。例如，该函数 `random` 不支持BigNumbers。

##### `bignumber.js`

###### 加法 plus

- 语法

  ```
  .plus()
  ```

  - 参数值
    - `n` (必需): `number|string|BigNumber` 参与计算的数字
    - `base`: `number` 进制 (默认为十进制)
  - **返回值**
    `BigNumber`

- **举例**

```csharp
0.1 + 0.2                       // 0.30000000000000004
x = new BigNumber(0.1)
y = x.plus(0.2)                 // '0.3'
BigNumber(0.7).plus(x).plus(y)  // '1'
x.plus('0.1', 8)                // '0.225'
```

###### 减法 minus

- 语法

  ```
  .minus()
  ```

  - 参数值
    - `n` (必需): `number|string|BigNumber` 参与计算的数字
    - `base`: `number` 进制 (默认为十进制)
  - 返回值
    - `BigNumber`

- **举例**

```cpp
0.3 - 0.1                       // 0.19999999999999998
x = new BigNumber(0.3)
x.minus(0.1)                    // '0.2'
x.minus(0.6, 20)                // '0'
```

###### 乘法 multipliedBy

- 语法

  ```
  .times()
  ```

  - 参数值
    - `n` (必需): `number|string|BigNumber` 参与计算的数字
    - `base`: `number` 进制 (默认为十进制)
  - 返回值
    - `BigNumber`

- **举例**

```csharp
0.6 * 3                         // 1.7999999999999998
x = new BigNumber(0.6)
y = x.multipliedBy(3)           // '1.8'
BigNumber('7e+500').times(y)    // '1.26e+501'
x.multipliedBy('-a', 16)        // '-6'
```

###### 除法 dividedBy

- 语法

  ```
  .div()
  ```

  - 参数值
    - `n` (必需): `number|string|BigNumber` 参与计算的数字
    - `base`: `number` 进制 (默认为十进制)
  - 返回值
    - `BigNumber`

- **举例**



```cpp
x = new BigNumber(355)
y = new BigNumber(113)
x.dividedBy(y)                  // '3.14159292035398230088'
x.div(5)                        // '71'
x.div(47, 16)                   // '5'
```

###### 除法-取整 dividedToIntegerBy

- 语法

  ```
  .idiv()
  ```

  - 参数值
    - `n` (必需): `number|string|BigNumber` 参与计算的数字
    - `base`: `number` 进制 (默认为十进制)
  - 返回值
    - `BigNumber`

- **举例**



```csharp
x = new BigNumber(5)
y = new BigNumber(3)
x.dividedToIntegerBy(y)         // '1'
x.idiv(0.7)                     // '7'
x.idiv('0.f', 16)               // '5'
```

###### 除法-取余 modulo

- 语法

  ```
  .mod()
  ```

  - 参数值
    - `n` (必需): `number|string|BigNumber` 参与计算的数字
    - `base`: `number` 进制 (默认为十进制)
  - 返回值
    - `BigNumber`

- **举例**

```js
1 % 0.9                         // 0.09999999999999998
x = new BigNumber(1)
x.modulo(0.9)                   // '0.1'
y = new BigNumber(33)
y.mod('a', 33)                  // '3'
```

###### 指数运算 exponentiatedBy

- 语法

  ```js
  .pow()
  ```

  - 参数值
    - `n` (必需): `number|string|BigNumber` 参与计算的数字
    - `m`: `number|string|BigNumber` 指数
  - 返回值
    - `BigNumber`

- **举例**



```js
Math.pow(0.7, 2)                // 0.48999999999999994
x = new BigNumber(0.7)
x.exponentiatedBy(2)            // '0.49'
BigNumber(3).pow(-2)            // '0.11111111111111111111'
```

###### 开平方 squareRoot

- **语法**
  `.sqrt()`
- **举例**



```js
x = new BigNumber(16)
x.squareRoot()                  // '4'
y = new BigNumber(3)
y.sqrt()                        // '1.73205080756887729353'
```

###### 四舍五入 toFixed

- 语法

  ```js
  .toFixed([dp [, rm]])
  ```

  - `dp` (必需): `number` 保留小数位数
  - `rm`: `number`

- **举例**

```js
x = 3.456
y = new BigNumber(x)
x.toFixed()                     // '3'
y.toFixed()                     // '3.456'
y.toFixed(0)                    // '3'
x.toFixed(2)                    // '3.46'
y.toFixed(2)                    // '3.46'
y.toFixed(2, 1)                 // '3.45'  (ROUND_DOWN)
x.toFixed(5)                    // '3.45600'
```





##### big.js、bignumber.js 和 decimal.js异同

`big.js` 是最小的任意精度的计算库。`big.js` 是三者中最小也最简单的，它只有 `bignumber.js` 一半的方法，不到 `bignumber.js` 的一半大。`big.js` 中，`NAN` 或者 `Infinity` 是不合法值，它不能处理除了十进制以外的其它进制。运行时的配置项仅限于设置小数位数、包含除法在内的四舍五入的运算模式，以及 `toString` 生成的科学计数法的指数值。

```ini
Big.DP = 7;             // 最大小数位数
Big.RM = 4;             // round half-up
var x = new Big(5);
x.div(3).toString();    // '1.6666667' 
```

这三个库都包含了 JavaScript 中 Number 类型的 `toExponential`、`toFixed` 和 `toPrecision` 方法。

`bignumber.js` 和 `decimal.js` 存储值的进制比 `big.js` 更高，因此当操作大量数字时，前两者的速度会更快。

`bignumber.js` 和 `decimal.js` 也支持其它进制的计算，并支持前缀，比如十六进制的 `0x`。`decimal.js` 还可以使用二进制指数表示法处理二进制、八进制和十六进制，C 语言中就是如此。

```scss
var x = new BigNumber('ff.8', 16);
x.toString();          // '255.5'
x.toString(16);        // 'ff.8'

var x = new Decimal('0xff.8');
x.toString();          // '255.5'
x.toHexadecimal();     // '0xff.8'
x.toHex(3);            // '0x1.ffp+7'
```

`decimal.js` 最初是通过向 `bignumber.js` 添加对`非整数次幂`的支持来开发的，但后续决定将它作为一个单独的库来发布。二者最主要的区别在于，`decimal.js` 的精度是以有效数字而不是小数位数来指定的，并且所有的计算都舍入到该精度（类似于 Python 的小数模块），而不是只有涉及到除法的运算。

```scss
Bignumber.config({ DECIMAL_PLACES: 3, ROUNDING_MODE; 1 });
var x = new BigNumber('123.456789');
x.plus(1).toString();    // '124.456789'

Decimal.set({ precision: 7, rounding: 4 });
var y = new Decimal('123.456789');
y.plus(1).toString();    // '124.4568'
```

`bignumber.js` 可能更适合金融类应用，因为用户不用担心丢失精度，除非使用了涉及除法的操作。

对于科学类应用来说，`decimal.js` 可能更好，因为它可以更有效的处理非常小或者非常大的数值。例如，它没有 `bignumber.js` 的限制，即当将一个小指数值和一个大指数值相加时，`bignumber.js` 将使用完全精度来操作，时间上来看不可行。

如上所述，`decimal.js` 还支持非整数次幂、三角函数、exp、ln、log 方法。这些额外的方法使得 `decimal.js` 比 `bignumber.js` 大得多。

- `big.js` 最小最简；便于使用；精度采用小数位；精度仅适用除法；4种舍入模式。
- `bignumber.js` 配置选项；NaN；Infinity；精度采用小数位；精度仅适用于除法；随机数字；进制转换；9种舍入模式；模模式；模幂运算。
- `decimal.js` 配置选项；NaN；Infinity；非整数次幂，exp，ln，log；三角函数；精度采用有效数字；所有操作均采取精度；随机数字；9种舍入模式；模模式；二进制，八进制，十六进制；二进制指数符号。
