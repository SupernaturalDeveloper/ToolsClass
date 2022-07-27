// ——————————————————————————————————————————————————————————————————————
// js字符串校验工具类
/*
js字符串校验工具类
工具类方法
TypeFn包含的方法如下

是否为字符串
是否为数字
是否为boolean
是否为函数
是否为为null
是否为undefined
是否为对象
是否为数组
是否为时间
是否为正则
是否为错误对象
是否为Symbol函数
是否为Promise对象
是否为Set对象
对象为空(false)
对象不为空(true)
是否为Ios端
是否为Android端
是否为PC端
是否为微信浏览器
获取浏览器内核
严格的身份证校验
校验字符串是否为以下类型(手机号码、座机、身份证、密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线、邮政编码、QQ号、邮箱、金额(小数点2位)、网址、IP、日期时间、数字、英文、中文、小写、大写、HTML标记)

*/
class TypeFn {
  isString(o) {
    //是否字符串
    return Object.prototype.toString.call(o).slice(8, -1) === 'String';
  }

  isNumber(o) {
    //是否数字
    return Object.prototype.toString.call(o).slice(8, -1) === 'Number';
  }

  isBoolean(o) {
    //是否boolean
    return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
  }

  isFunction(o) {
    //是否函数
    return Object.prototype.toString.call(o).slice(8, -1) === 'Function';
  }

  isNull(o) {
    //是否为null
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null';
  }

  isUndefined(o) {
    //是否undefined
    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';
  }

  isObj(o) {
    //是否对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
  }

  isArray(o) {
    //是否数组
    return Object.prototype.toString.call(o).slice(8, -1) === 'Array';
  }

  isDate(o) {
    //是否时间
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date';
  }

  isRegExp(o) {
    //是否正则
    return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp';
  }

  isError(o) {
    //是否错误对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Error';
  }

  isSymbol(o) {
    //是否Symbol函数
    return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol';
  }

  isPromise(o) {
    //是否Promise对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Promise';
  }

  isSet(o) {
    //是否Set对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Set';
  }

  isFalse(o) {
    //对象为空(false)
    if (o == '' || o == undefined || o == null || o == 'null' || o == 'undefined' || o == 0 || o == false || o == NaN) return true;
    return false;
  }

  isTrue(o) {
    //对象不为空(true)
    return !this.isFalse(o);
  }

  isIos() {
    // 是否为Ios端
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      // this.phoneType = '苹果系统'
      return true;
    } else if (/(Android)/i.test(navigator.userAgent)) {
      // this.phoneType = '安卓系统'
      return false;
    } else if (/(SymbionOS)/i.test(navigator.userAgent)) {
      // this.phoneType = '鸿蒙系统'
      return false;
    } else {
      // this.phoneType = 'PC电脑'
      return false;
    }
  }

  isAndroid() {
    // 是否为Android端
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      // this.phoneType = '苹果系统'
      return false;
    } else if (/(Android)/i.test(navigator.userAgent)) {
      // this.phoneType = '安卓系统'
      return true;
    } else if (/(SymbionOS)/i.test(navigator.userAgent)) {
      // this.phoneType = '鸿蒙系统'
      return false;
    } else {
      // this.phoneType = 'PC电脑'
      return false;
    }
  }

  isPC() {
    //是否为PC端
    var userAgentInfo = navigator.userAgent;
    var Agents = ['Android', 'iPhone', 'SymbionOS', 'Windows Phone', 'iPad', 'iPod'];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  isWeiXin() {
    // 是否为微信浏览器
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      // this.isWeChat = '微信'
      return true;
    } else {
      // this.isWeChat = '浏览器'
      return false;
    }
  }

  browserType() {
    // 获取浏览器内核
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf('Opera') > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera; //判断是否IE浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
    var isEdge = userAgent.indexOf('Edge') > -1 && !isIE; //判断是否IE的Edge浏览器
    var isFF = userAgent.indexOf('Firefox') > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1; //判断是否Safari浏览器
    var isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1; //判断Chrome浏览器

    if (isIE) {
      var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp['$1']);
      if (fIEVersion == 7) return 'IE7';
      else if (fIEVersion == 8) return 'IE8';
      else if (fIEVersion == 9) return 'IE9';
      else if (fIEVersion == 10) return 'IE10';
      else return 'IE7以下'; //IE版本过低
    }
    if (isIE11) return 'IE11';
    if (isEdge) return 'Edge';
    if (isFF) return 'FF';
    if (isOpera) return 'Opera';
    if (isSafari) return 'Safari';
    if (isChrome) return 'Chrome';
  }

  checkStr(str, type) {
    // 校验字符串是否为以下类型
    switch (type) {
      case 'phone': //手机号码
        return /^1[3|4|5|6|7|8][0-9]{9}$/.test(str);
      case 'tel': //座机
        return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
      case 'card': //身份证
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
      case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
        return /^[a-zA-Z]\w{5,17}$/.test(str);
      case 'postal': //邮政编码
        return /[1-9]\d{5}(?!\d)/.test(str);
      case 'QQ': //QQ号
        return /^[1-9][0-9]{4,9}$/.test(str);
      case 'email': //邮箱
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
      case 'money': //金额(小数点2位)
        return /^\d*(?:\.\d{0,2})?$/.test(str);
      case 'URL': //网址
        return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str);
      case 'IP': //IP
        return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
      case 'date': //日期时间
        return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str);
      case 'number': //数字
        return /^[0-9]$/.test(str);
      case 'english': //英文
        return /^[a-zA-Z]+$/.test(str);
      case 'chinese': //中文
        return /^[\u4E00-\u9FA5]+$/.test(str);
      case 'lower': //小写
        return /^[a-z]+$/.test(str);
      case 'upper': //大写
        return /^[A-Z]+$/.test(str);
      case 'HTML': //HTML标记
        return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
      default:
        return true;
    }
  }

  // 严格的身份证校验
  isCardID(sId) {
    if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
      alert('你输入的身份证长度或格式错误');
      return false;
    }
    //身份证城市
    var aCity = {
      11: '北京',
      12: '天津',
      13: '河北',
      14: '山西',
      15: '内蒙古',
      21: '辽宁',
      22: '吉林',
      23: '黑龙江',
      31: '上海',
      32: '江苏',
      33: '浙江',
      34: '安徽',
      35: '福建',
      36: '江西',
      37: '山东',
      41: '河南',
      42: '湖北',
      43: '湖南',
      44: '广东',
      45: '广西',
      46: '海南',
      50: '重庆',
      51: '四川',
      52: '贵州',
      53: '云南',
      54: '西藏',
      61: '陕西',
      62: '甘肃',
      63: '青海',
      64: '宁夏',
      65: '新疆',
      71: '台湾',
      81: '香港',
      82: '澳门',
      91: '国外'
    };
    if (!aCity[parseInt(sId.substr(0, 2))]) {
      alert('你的身份证地区非法');
      return false;
    }

    // 出生日期验证
    var sBirthday = (sId.substr(6, 4) + '-' + Number(sId.substr(10, 2)) + '-' + Number(sId.substr(12, 2))).replace(/-/g, '/'),
      d = new Date(sBirthday);
    if (sBirthday != d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()) {
      alert('身份证上的出生日期非法');
      return false;
    }

    // 身份证号码校验
    var sum = 0,
      weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
      codes = '10X98765432';
    for (var i = 0; i < sId.length - 1; i++) {
      sum += sId[i] * weights[i];
    }
    var last = codes[sum % 11]; //计算出来的最后一位身份证号码
    if (sId[sId.length - 1] != last) {
      alert('你输入的身份证号非法');
      return false;
    }

    return true;
  }
}
//——————————————————————————————————————————————————————————————————

// js数组工具类
/*
js数组工具类
工具类方法
MyArrayFn包含的方法如下

判断一个元素是否在数组中
遍历元素：相当于原生forEach方法
遍历元素,对里面的每个值做处理再返回一个新的值：相当于原生map方法
数组排序：从小到大、从大到小、随机
去重
求两个集合的并集
求两个集合的交集
删除其中一个元素
最大值
最小值
求和
平均值
*/
class MyArrayFn {
  /*判断一个元素是否在数组中*/
  contains(arr, val) {
    return arr.indexOf(val) != -1 ? true : false;
  }

  /**
   * 遍历元素：相当于原生forEach方法
   * @param  {arr} 数组
   * @param  {fn} 回调函数
   * @return {undefined}
   */
  each(arr, fn) {
    fn = fn || Function;
    var a = [];
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < arr.length; i++) {
      var res = fn.apply(arr, [arr[i], i].concat(args));
      if (res != null) a.push(res);
    }
  }

  /**
   * 遍历元素,对里面的每个值做处理再返回一个新的值：相当于原生map方法
   * @param  {arr} 数组
   * @param  {fn} 回调函数
   * @param  {thisObj} this指向
   * @return {Array}
   */
  map(arr, fn, thisObj) {
    var scope = thisObj || window;
    var a = [];
    for (var i = 0, j = arr.length; i < j; ++i) {
      var res = fn.call(scope, arr[i], i, this);
      if (res != null) a.push(res);
    }
    return a;
  }

  /**
   * 数组排序
   * @param  {arr} 数组
   * @param  {type} 1：从小到大   2：从大到小   3：随机
   * @return {Array}
   */
  sort(arr, type) {
    return arr.sort((a, b) => {
      switch (type) {
        case 1:
          return a - b;
        case 2:
          return b - a;
        case 3:
          return Math.random() - 0.5;
        default:
          return arr;
      }
    });
  }

  /*去重*/
  unique(arr) {
    if (Array.hasOwnProperty('from')) {
      return Array.from(new Set(arr));
    } else {
      var n = {},
        r = [];
      for (var i = 0; i < arr.length; i++) {
        if (!n[arr[i]]) {
          n[arr[i]] = true;
          r.push(arr[i]);
        }
      }
      return r;
    }
    // 注：上面 else 里面的排重并不能区分 2 和 '2'，但能减少用indexOf带来的性能
    /* 正确排重
      if ( Array.hasOwnProperty('from') ) {
          return Array.from(new Set(arr))
      }else{
          var r = [], NaNBol = true
          for(var i=0; i < arr.length; i++) {
              if (arr[i] !== arr[i]) {
                  if (NaNBol && r.indexOf(arr[i]) === -1) {
                      r.push(arr[i])
                      NaNBol = false
                  }
              }else{
                  if(r.indexOf(arr[i]) === -1) r.push(arr[i])
              }
          }
          return r
      }
      */
  }

  /*求两个集合的并集*/
  union(a, b) {
    var newArr = a.concat(b);
    return this.unique(newArr);
  }

  /*求两个集合的交集*/
  intersect(a, b) {
    var _this = this;
    a = this.unique(a);
    return this.map(a, function (o) {
      return _this.contains(b, o) ? o : null;
    });
  }

  /*删除其中一个元素*/
  remove(arr, ele) {
    var index = arr.indexOf(ele);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  /*将类数组转换为数组的方法*/
  formArray(ary) {
    var arr = [];
    if (Array.isArray(ary)) {
      arr = ary;
    } else {
      arr = Array.prototype.slice.call(ary);
    }
    return arr;
  }

  /*最大值*/
  max(arr) {
    return Math.max.apply(null, arr);
  }

  /*最小值*/
  min(arr) {
    return Math.min.apply(null, arr);
  }

  /*求和*/
  sum(arr) {
    return arr.reduce((pre, cur) => {
      return pre + cur;
    });
  }

  /*平均值*/
  average(arr) {
    return this.sum(arr) / arr.length;
  }
}
//————————————————————————————————————————————————————————————————————
/*
js时间Date工具类
工具类方法
有关Date的工具方法也可以参考我之前的总结：https://qkongtao.cn/?p=1284

返回指定长度的月份集合(该月前/后几个月份的日期)
返回指定长度的天数集合(该天前/后几个天日期)
秒数转字符串(formatHMS(3610) =>1h0m10s)
获取某月有多少天
获取某年有多少天
获取某年的第一天
获取某年最后一天
获取某个日期是当年中的第几天
获取某个日期在这一年的第几周
*/
class DateFn {
  // 时间戳时间格式化
  /**
   // 时间戳转日期
      var timestamp = (new Date("2015/06/23 08:00:20")).getTime() / 1000;
      console.log("时间戳：" + timestamp);
      console.log("时间戳转日期：" + timestampToTime(timestamp));
  // 测试结果
  /*
  时间戳：1435017620
  时间戳转日期：2015-06-23 8:0:20
  */
  timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y + M + D + h + m + s;
  }

  /**
   * 返回指定长度的月份集合
   *
   * @param  {time} 时间
   * @param  {len} 长度
   * @param  {direction} 方向：  1: 前几个月;  2: 后几个月;  3:前后几个月  默认 3
   * @return {Array} 数组
   *
   * @example   getMonths('2018-1-29', 6, 1)  // ->  ["2018-1", "2017-12", "2017-11", "2017-10", "2017-9", "2017-8", "2017-7"]
   */
  getMonths(time, len, direction) {
    var mm = new Date(time).getMonth() + 1,
      yy = new Date(time).getFullYear(),
      direction = isNaN(direction) ? 3 : direction,
      index = mm;

    var cutMonth = function (index) {
      var arr;
      if (direction === 1) {
        arr = formatPre(index).reverse();
      } else if (direction === 2) {
        arr = formatNext(index);
      } else {
        arr = formatPre(index)
          .reverse()
          .slice(len / 2)
          .concat(formatNext(index).slice(1, len / 2 + 1));
      }
      return arr.sort(function (t1, t2) {
        return new Date(t1).getTime() - new Date(t2).getTime();
      });
    };

    var formatPre = function (index) {
      var currNum = index,
        preNum = 0,
        currArr = [],
        preArr = [];
      if (index - len < 0) {
        preNum = len - currNum;
      }
      for (var i = 0; i < currNum; i++) {
        currArr.push([yy + '-' + (currNum - i)]);
      }
      for (var i = 1; i <= preNum; i++) {
        preArr.push([yy - Math.ceil(i / 12) + '-' + (12 - ((i - 1) % 12))]);
      }
      return currArr.concat(preArr);
    };

    var formatNext = function (index) {
      var currNum = 12 - index,
        nextNum = 0,
        currArr = [],
        nextArr = [];
      if (len - currNum > 0) {
        nextNum = len - currNum;
      }
      for (var i = 0; i <= currNum; i++) {
        currArr.push([yy + '-' + (index + i)]);
      }
      for (var i = 1; i < nextNum; i++) {
        nextArr.push([yy + Math.ceil(i / 12) + '-' + (i % 13 === 0 ? 1 : i % 13)]);
      }
      return currArr.concat(nextArr);
    };
    return cutMonth(index);
  }

  /**
   * 返回指定长度的天数集合
   *
   * @param  {time} 时间
   * @param  {len} 长度
   * @param  {direction} 方向： 1: 前几天;  2: 后几天;  3:前后几天  默认 3
   * @return {Array} 数组
   *
   * @example date.getDays('2018-1-29', 6) // -> ["2018-1-26", "2018-1-27", "2018-1-28", "2018-1-29", "2018-1-30", "2018-1-31", "2018-2-1"]
   */
  getDays(time, len, direction) {
    var tt = new Date(time);
    var getDay = function (day) {
      var t = new Date(time);
      t.setDate(t.getDate() + day);
      var m = t.getMonth() + 1;
      return t.getFullYear() + '-' + m + '-' + t.getDate();
    };
    var arr = [];
    if (direction === 1) {
      for (var i = 1; i <= len; i++) {
        arr.unshift(getDay(-i));
      }
    } else if (direction === 2) {
      for (var i = 1; i <= len; i++) {
        arr.push(getDay(i));
      }
    } else {
      for (var i = 1; i <= len; i++) {
        arr.unshift(getDay(-i));
      }
      arr.push(tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate());
      for (var i = 1; i <= len; i++) {
        arr.push(getDay(i));
      }
    }
    return direction === 1
      ? arr.concat([tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate()])
      : direction === 2
      ? [tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate()].concat(arr)
      : arr;
  }

  /**
   * @param  {s} 秒数
   * @return {String} 字符串
   *
   * @example formatHMS(3610) // -> 1h0m10s
   */
  formatHMS(s) {
    var str = '';
    if (s > 3600) {
      str = Math.floor(s / 3600) + 'h' + Math.floor((s % 3600) / 60) + 'm' + (s % 60) + 's';
    } else if (s > 60) {
      str = Math.floor(s / 60) + 'm' + (s % 60) + 's';
    } else {
      str = (s % 60) + 's';
    }
    return str;
  }

  /*获取某月有多少天*/
  getMonthOfDay(time) {
    var date = new Date(time);
    var year = date.getFullYear();
    var mouth = date.getMonth() + 1;
    var days;

    //当月份为二月时，根据闰年还是非闰年判断天数
    if (mouth == 2) {
      days = (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) || (year % 4 == 0 && year % 100 != 0) ? 28 : 29;
    } else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
      //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
      days = 31;
    } else {
      //其他月份，天数为：30.
      days = 30;
    }
    return days;
  }

  /*获取某年有多少天*/
  getYearOfDay(time) {
    var firstDayYear = this.getFirstDayOfYear(time);
    var lastDayYear = this.getLastDayOfYear(time);
    var numSecond = (new Date(lastDayYear).getTime() - new Date(firstDayYear).getTime()) / 1000;
    return Math.ceil(numSecond / (24 * 3600));
  }

  /*获取某年的第一天*/
  getFirstDayOfYear(time) {
    var year = new Date(time).getFullYear();
    return year + '-01-01 00:00:00';
  }

  /*获取某年最后一天*/
  getLastDayOfYear(time) {
    var year = new Date(time).getFullYear();
    var dateString = year + '-12-01 00:00:00';
    var endDay = this.getMonthOfDay(dateString);
    return year + '-12-' + endDay + ' 23:59:59';
  }

  /*获取某个日期是当年中的第几天*/
  getDayOfYear(time) {
    var firstDayYear = this.getFirstDayOfYear(time);
    var numSecond = (new Date(time).getTime() - new Date(firstDayYear).getTime()) / 1000;
    return Math.ceil(numSecond / (24 * 3600));
  }

  /*获取某个日期在这一年的第几周*/
  getDayOfYearWeek(time) {
    var numDays = this.getDayOfYear(time);
    return Math.ceil(numDays / 7);
  }
}

//————————————————————————————js浏览器存储相关操作：cookie、localStorage、sessionStorage————————————————————————————————————————————
/*
js浏览器存储相关操作工具类
js浏览器存储相关操作：cookie、localStorage、sessionStorage
工具类方法
设置cookie
获取cookie
删除cookie
设置localStorage
获取localStorage
移除localStorage
移除所有localStorage
设置sessionStorage
获取sessionStorage
移除sessionStorage
移除所有sessionStorage

*/
class StorageFn {
  constructor() {
    this.ls = window.localStorage;
    this.ss = window.sessionStorage;
  }

  /*-----------------cookie---------------------*/
  /*设置cookie*/
  setCookie(name, value, day) {
    var setting = arguments[0];
    if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
      for (var i in setting) {
        var oDate = new Date();
        oDate.setDate(oDate.getDate() + day);
        document.cookie = i + '=' + setting[i] + ';expires=' + oDate;
      }
    } else {
      var oDate = new Date();
      oDate.setDate(oDate.getDate() + day);
      document.cookie = name + '=' + value + ';expires=' + oDate;
    }
  }

  /*获取cookie*/
  getCookie(name) {
    var arr = document.cookie.split('; ');
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split('=');
      if (arr2[0] == name) {
        return arr2[1];
      }
    }
    return '';
  }

  /*删除cookie*/
  removeCookie(name) {
    this.setCookie(name, 1, -1);
  }

  /*-----------------localStorage---------------------*/
  /*设置localStorage*/
  setLocal(key, val) {
    var setting = arguments[0];
    if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
      for (var i in setting) {
        this.ls.setItem(i, JSON.stringify(setting[i]));
      }
    } else {
      this.ls.setItem(key, JSON.stringify(val));
    }
  }

  /*获取localStorage*/
  getLocal(key) {
    if (key) return JSON.parse(this.ls.getItem(key));
    return null;
  }

  /*移除localStorage*/
  removeLocal(key) {
    this.ls.removeItem(key);
  }

  /*移除所有localStorage*/
  clearLocal() {
    this.ls.clear();
  }

  /*-----------------sessionStorage---------------------*/
  /*设置sessionStorage*/
  setSession(key, val) {
    var setting = arguments[0];
    if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
      for (var i in setting) {
        this.ss.setItem(i, JSON.stringify(setting[i]));
      }
    } else {
      this.ss.setItem(key, JSON.stringify(val));
    }
  }

  /*获取sessionStorage*/
  getSession(key) {
    if (key) return JSON.parse(this.ss.getItem(key));
    return null;
  }

  /*移除sessionStorage*/
  removeSession(key) {
    this.ss.removeItem(key);
  }

  /*移除所有sessionStorage*/
  clearSession() {
    this.ss.clear();
  }
}
//——————————————————————————————————————————————————————————————————
/*
js字符串工具类
工具类方法
去除空格(1：所有空格 2：前后空格 3：前空格 4：后空格)
字符串转换(1：首字母大写 2：首页母小写 3：大小写转换 4：全部大写 5：全部小写)
检测密码强度(0级、1级、2级、3级、4级)
过滤html代码(把<>转换)
*/
class StringFn {
  /**
   * 去除空格
   * @param  {str}
   * @param  {type}
   *       type:  1-所有空格  2-前后空格  3-前空格 4-后空格
   * @return {String}
   */
  trim(str, type) {
    type = type || 1;
    switch (type) {
      case 1:
        return str.replace(/\s+/g, '');
      case 2:
        return str.replace(/(^\s*)|(\s*$)/g, '');
      case 3:
        return str.replace(/(^\s*)/g, '');
      case 4:
        return str.replace(/(\s*$)/g, '');
      default:
        return str;
    }
  }

  /**
   * 字符串转换
   * @param  {str}
   * @param  {type}
   *       type:  1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写
   * @return {String}
   */
  changeCase(str, type) {
    type = type || 4;
    switch (type) {
      case 1:
        return str.replace(/\b\w+\b/g, function (word) {
          return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
        });
      case 2:
        return str.replace(/\b\w+\b/g, function (word) {
          return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
        });
      case 3:
        return str
          .split('')
          .map(function (word) {
            if (/[a-z]/.test(word)) {
              return word.toUpperCase();
            } else {
              return word.toLowerCase();
            }
          })
          .join('');
      case 4:
        return str.toUpperCase();
      case 5:
        return str.toLowerCase();
      default:
        return str;
    }
  }

  /*
      检测密码强度
  */
  checkPwd(str) {
    var Lv = 0;
    if (str.length < 6) {
      return Lv;
    }
    if (/[0-9]/.test(str)) {
      Lv++;
    }
    if (/[a-z]/.test(str)) {
      Lv++;
    }
    if (/[A-Z]/.test(str)) {
      Lv++;
    }
    if (/[\.|-|_]/.test(str)) {
      Lv++;
    }
    return Lv;
  }

  /*过滤html代码(把<>转换)*/
  filterTag(str) {
    str = str.replace(/&/gi, '&amp;');
    str = str.replace(/</gi, '&lt;');
    str = str.replace(/>/gi, '&gt;');
    str = str.replace(' ', '&nbsp;');
    return str;
  }
}
//——————————————————————————————————————————————————————————————————
/*
js数字相关操作工具类
工具类方法
随机数范围获取随机数
将阿拉伯数字翻译成中文的大写数字
将数字转换为大写金额
*/
// js数字相关操作

class NumberFn {
  /*随机数范围*/
  random(min, max) {
    if (arguments.length === 2) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    } else {
      return null;
    }
  }

  /*将阿拉伯数字翻译成中文的大写数字*/
  numberToChinese(num) {
    var AA = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十');
    var BB = new Array('', '十', '百', '仟', '萬', '億', '点', '');
    var a = ('' + num).replace(/(^0*)/g, '').split('.'),
      k = 0,
      re = '';
    for (var i = a[0].length - 1; i >= 0; i--) {
      switch (k) {
        case 0:
          re = BB[7] + re;
          break;
        case 4:
          if (!new RegExp('0{4}//d{' + (a[0].length - i - 1) + '}$').test(a[0])) re = BB[4] + re;
          break;
        case 8:
          re = BB[5] + re;
          BB[7] = BB[5];
          k = 0;
          break;
      }
      if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re;
      if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re;
      k++;
    }

    if (a.length > 1) {
      // 加上小数部分(如果有小数部分)
      re += BB[6];
      for (var i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)];
    }
    if (re == '一十') re = '十';
    if (re.match(/^一/) && re.length == 3) re = re.replace('一', '');
    return re;
  }

  /*将数字转换为大写金额*/
  changeToChinese(Num) {
    //判断如果传递进来的不是字符的话转换为字符
    if (typeof Num == 'number') {
      Num = new String(Num);
    }
    Num = Num.replace(/,/g, ''); //替换toMoney()中的“,”
    Num = Num.replace(/ /g, ''); //替换toMoney()中的空格
    Num = Num.replace(/￥/g, ''); //替换掉可能出现的￥字符
    if (isNaN(Num)) {
      //验证输入的字符是否为数字
      //alert("请检查小写金额是否正确");
      return '';
    }
    //字符处理完毕后开始转换，采用前后两部分分别转换
    var part = String(Num).split('.');
    var newChar = '';
    //小数点前进行转化
    for (var i = part[0].length - 1; i >= 0; i--) {
      if (part[0].length > 10) {
        return '';
        //若数量超过拾亿单位，提示
      }
      var tmpnewchar = '';
      var perChar = part[0].charAt(i);
      switch (perChar) {
        case '0':
          tmpnewchar = '零' + tmpnewchar;
          break;
        case '1':
          tmpnewchar = '壹' + tmpnewchar;
          break;
        case '2':
          tmpnewchar = '贰' + tmpnewchar;
          break;
        case '3':
          tmpnewchar = '叁' + tmpnewchar;
          break;
        case '4':
          tmpnewchar = '肆' + tmpnewchar;
          break;
        case '5':
          tmpnewchar = '伍' + tmpnewchar;
          break;
        case '6':
          tmpnewchar = '陆' + tmpnewchar;
          break;
        case '7':
          tmpnewchar = '柒' + tmpnewchar;
          break;
        case '8':
          tmpnewchar = '捌' + tmpnewchar;
          break;
        case '9':
          tmpnewchar = '玖' + tmpnewchar;
          break;
      }
      switch (part[0].length - i - 1) {
        case 0:
          tmpnewchar = tmpnewchar + '元';
          break;
        case 1:
          if (perchar != 0) tmpnewchar = tmpnewchar + '拾';
          break;
        case 2:
          if (perchar != 0) tmpnewchar = tmpnewchar + '佰';
          break;
        case 3:
          if (perchar != 0) tmpnewchar = tmpnewchar + '仟';
          break;
        case 4:
          tmpnewchar = tmpnewchar + '万';
          break;
        case 5:
          if (perchar != 0) tmpnewchar = tmpnewchar + '拾';
          break;
        case 6:
          if (perchar != 0) tmpnewchar = tmpnewchar + '佰';
          break;
        case 7:
          if (perchar != 0) tmpnewchar = tmpnewchar + '仟';
          break;
        case 8:
          tmpnewchar = tmpnewchar + '亿';
          break;
        case 9:
          tmpnewchar = tmpnewchar + '拾';
          break;
      }
      var newchar = tmpnewchar + newchar;
    }
    //小数点之后进行转化
    if (Num.indexOf('.') != -1) {
      if (part[1].length > 2) {
        // alert("小数点之后只能保留两位,系统将自动截断");
        part[1] = part[1].substring(0, 2);
      }
      for (i = 0; i < part[1].length; i++) {
        tmpnewchar = '';
        perchar = part[1].charAt(i);
        switch (perchar) {
          case '0':
            tmpnewchar = '零' + tmpnewchar;
            break;
          case '1':
            tmpnewchar = '壹' + tmpnewchar;
            break;
          case '2':
            tmpnewchar = '贰' + tmpnewchar;
            break;
          case '3':
            tmpnewchar = '叁' + tmpnewchar;
            break;
          case '4':
            tmpnewchar = '肆' + tmpnewchar;
            break;
          case '5':
            tmpnewchar = '伍' + tmpnewchar;
            break;
          case '6':
            tmpnewchar = '陆' + tmpnewchar;
            break;
          case '7':
            tmpnewchar = '柒' + tmpnewchar;
            break;
          case '8':
            tmpnewchar = '捌' + tmpnewchar;
            break;
          case '9':
            tmpnewchar = '玖' + tmpnewchar;
            break;
        }
        if (i == 0) tmpnewchar = tmpnewchar + '角';
        if (i == 1) tmpnewchar = tmpnewchar + '分';
        newchar = newchar + tmpnewchar;
      }
    }
    //替换所有无用汉字
    while (newchar.search('零零') != -1) newchar = newchar.replace('零零', '零');
    newchar = newchar.replace('零亿', '亿');
    newchar = newchar.replace('亿万', '亿');
    newchar = newchar.replace('零万', '万');
    newchar = newchar.replace('零元', '元');
    newchar = newchar.replace('零角', '');
    newchar = newchar.replace('零分', '');
    if (newchar.charAt(newchar.length - 1) == '元') {
      newchar = newchar + '整';
    }
    return newchar;
  }
}
//————————————————————————————————————————————————————————————————————
/**
 * 有时我们需要把二进制数据编码为适合放在URL中的形式。
 * 这时采用base64编码具有不可读性，即所编码的数据不会被人直接看出。
 */
/*
js base64编码工具方法
Base64编码的作用
由于某些系统中只能使用ASCII字符。Base64就是用来将非ASCII字符的数据转换成ASCII字符的一种方法。
Base64其实不是安全领域下的加密解密算法，而是一种编码，也就是说，它是可以被翻译回原来的样子。它并不是一种加密过程。所以base64只能算是一个编码算法，对数据内容进行编码来适合传输。虽然base64编码过后原文也变成不能看到的字符格式，但是这种方式很初级，很简单。

使用Base64编码原因
1.base64是网络上最常见的用于传输8bit字节代码的编码方式之一。
有时我们需要把二进制数据编码为适合放在URL中的形式。这时采用base64编码具有不可读性，即所编码的数据不会被人直接看出。
2.用于在http环境下传递较长的标识信息。
*/

class Base64 {
  constructor() {
    // private property
    const _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    // public method for encoding
    this.encode = function (input) {
      var output = '';
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;
      input = _utf8_encode(input);
      while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
      }
      return output;
    };

    // public method for decoding
    this.decode = function (input) {
      var output = '';
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
      while (i < input.length) {
        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 != 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
          output = output + String.fromCharCode(chr3);
        }
      }
      output = _utf8_decode(output);
      return output;
    };

    // private method for UTF-8 encoding
    this._utf8_encode = function (string) {
      string = string.replace(/\r\n/g, '\n');
      var utftext = '';
      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }
      }
      return utftext;
    };

    // private method for UTF-8 decoding
    this._utf8_decode = function (utftext) {
      var string = '';
      var i = 0;
      var c = (c1 = c2 = 0);
      while (i < utftext.length) {
        c = utftext.charCodeAt(i);
        if (c < 128) {
          string += String.fromCharCode(c);
          i++;
        } else if (c > 191 && c < 224) {
          c2 = utftext.charCodeAt(i + 1);
          string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
          i += 2;
        } else {
          c2 = utftext.charCodeAt(i + 1);
          c3 = utftext.charCodeAt(i + 2);
          string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
          i += 3;
        }
      }
      return string;
    };
  }
}

//——————————————————————————————————————————————————————————————————
class DomFn {
  $(selector) {
    var type = selector.substring(0, 1);
    if (type === '#') {
      if (document.querySelecotor) return document.querySelector(selector);
      return document.getElementById(selector.substring(1));
    } else if (type === '.') {
      if (document.querySelecotorAll) return document.querySelectorAll(selector);
      return document.getElementsByClassName(selector.substring(1));
    } else {
      return document['querySelectorAll' ? 'querySelectorAll' : 'getElementsByTagName'](selector);
    }
  }

  /*检测是否含有类名*/
  hasClass(ele, name) {
    return ele.className.match(new RegExp('(\\s|^)' + name + '(\\s|$)'));
  }

  /*添加类名*/
  addClass(ele, name) {
    if (!this.hasClass(ele, name)) ele.className += ' ' + name;
  }

  /*删除类名*/
  removeClass(ele, name) {
    if (this.hasClass(ele, name)) {
      var reg = new RegExp('(\\s|^)' + name + '(\\s|$)');
      ele.className = ele.className.replace(reg, '');
    }
  }

  /*替换类名*/
  replaceClass(ele, newName, oldName) {
    this.removeClass(ele, oldName);
    this.addClass(ele, newName);
  }

  /*获取兄弟节点*/
  siblings(ele) {
    console.log(ele.parentNode);
    var chid = ele.parentNode.children,
      eleMatch = [];
    for (var i = 0, len = chid.length; i < len; i++) {
      if (chid[i] != ele) {
        eleMatch.push(chid[i]);
      }
    }
    return eleMatch;
  }

  /*获取行间样式属性*/
  getByStyle(obj, name) {
    if (obj.currentStyle) {
      return obj.currentStyle[name];
    } else {
      return getComputedStyle(obj, false)[name];
    }
  }
}
// ————————————————————————————————————————————————————————————————————
/*
js原生http请求工具类
传统Ajax是利用XMLHttpRequest(XHR)发送请求获取数据，不注重分离的原则。
而Fetch API是基于Promise设计，专为解决XHR问题而出现。
原生ajax请求方法封装
原生fetchHttp请求方法封装
*/
class RequestFn {
  /*
    let url = 'http://demo.com/api'
    例: 
        ajax({
            url: url,
            success: function(data) {
    
            }
        })
*/
  ajax(setting) {
    //设置参数的初始值
    var opts = {
      method: (setting.method || 'GET').toUpperCase(), //请求方式
      url: setting.url || '', // 请求地址
      async: setting.async || true, // 是否异步
      dataType: setting.dataType || 'json', // 解析方式
      data: setting.data || '', // 参数
      success: setting.success || function () {}, // 请求成功回调
      error: setting.error || function () {} // 请求失败回调
    };

    // 参数格式化
    function params_format(obj) {
      var str = '';
      for (var i in obj) {
        str += i + '=' + obj[i] + '&';
      }
      return str.split('').slice(0, -1).join('');
    }

    // 创建ajax对象
    var xhr = new XMLHttpRequest();

    // 连接服务器open(方法GET/POST，请求地址， 异步传输)
    if (opts.method == 'GET') {
      xhr.open(opts.method, opts.url + '?' + params_format(opts.data), opts.async);
      xhr.send();
    } else {
      xhr.open(opts.method, opts.url, opts.async);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(opts.data);
    }

    /*
     ** 每当readyState改变时，就会触发onreadystatechange事件
     ** readyState属性存储有XMLHttpRequest的状态信息
     ** 0 ：请求未初始化
     ** 1 ：服务器连接已建立
     ** 2 ：请求已接受
     ** 3 : 请求处理中
     ** 4 ：请求已完成，且相应就绪
     */
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
        switch (opts.dataType) {
          case 'json':
            var json = JSON.parse(xhr.responseText);
            opts.success(json);
            break;
          case 'xml':
            opts.success(xhr.responseXML);
            break;
          default:
            opts.success(xhr.responseText);
            break;
        }
      }
    };

    xhr.onerror = function (err) {
      opts.error(err);
    };
  }

  /*
  let url = 'http://demo.com/api'
  例: 
      fetchHttp(url).
          then( res => {
              console.log(res)
          }).catch( e => {
              console.log(e)
          })
      fetchHttp(url, {
          method: 'POST',

      })
*/
  fetchHttp(url, setting = {}) {
    //设置参数的初始值
    let opts = {
      method: (setting.method || 'GET').toUpperCase(), //请求方式
      headers: setting.headers || {}, // 请求头设置
      credentials: setting.credentials || true, // 设置cookie是否一起发送
      body: setting.body || {},
      mode: setting.mode || 'cors', // 可以设置 cors, no-cors, same-origin
      redirect: setting.redirect || 'follow', // follow, error, manual
      cache: setting.cache || 'default' // 设置 cache 模式 (default, reload, no-cache)
    };
    let dataType = setting.dataType || 'json', // 解析方式
      data = setting.data || ''; // 参数

    // 参数格式化
    function params_format(obj) {
      var str = '';
      for (var i in obj) {
        str += `${i}=${obj[i]}&`;
      }
      return str.split('').slice(0, -1).join('');
    }

    if (opts.method === 'GET') {
      url = url + (data ? `?${params_format(data)}` : '');
    } else {
      setting.body = data || {};
    }
    return new Promise((resolve, reject) => {
      fetch(url, opts)
        .then(async res => {
          let data = dataType === 'text' ? await res.text() : dataType === 'blob' ? await res.blob() : await res.json();
          resolve(data);
        })
        .catch(e => {
          reject(e);
        });
    });
  }
}
// ————————————————————————————————————————————————————————————————————
/*
js其他高频率使用的工具类
工具类方法
对象深度克隆
防抖（一定连续触发的事件，只在最后执行一次）
节流（一段时间内只执行一次）
圆形碰撞检测
矩形碰撞检测
图片压缩
获取网址参数
获取全部url参数,并转换成json对象
删除url指定参数，返回url
随机获取十六进制颜色
图片加载
音频加载
DOM转字符串
字符串转DOM
光标所在位置插入字符

*/
class OtherFn {
  /**
   * [deepClone 深度克隆]
   * @param  {[type]} obj [克隆对象]
   * @return {[type]}     [返回深度克隆后的对象]
   */
  deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    var isType = function (obj, type) {
      var flag,
        typeString = Object.prototype.toString.call(obj);
      switch (type) {
        case 'Array':
          flag = typeString === '[object Array]';
          break;
        case 'Date':
          flag = typeString === '[object Date]';
          break;
        case 'RegExp':
          flag = typeString === '[object RegExp]';
          break;
        default:
          flag = false;
      }
      return flag;
    };
    var getRegExp = function (re) {
      var flags = '';
      if (re.global) flags += 'g';
      if (re.ignoreCase) flags += 'i';
      if (re.multiline) flags += 'm';
      return flags;
    };

    var _clone = function (parent) {
      var child,
        proto,
        parents = [],
        children = [];
      if (isType(parent, 'Array')) {
        // 对数组做特殊处理
        child = [];
      } else if (isType(parent, 'RegExp')) {
        // 对正则做特殊处理
        child = new RegExp(parent.source, getRegExp(parent));
        if (parent.lastIndex) child.lastIndex = parent.lastIndex;
      } else if (isType(parent, 'Date')) {
        // 对Date做特殊处理
        child = new Date(parent.getTime());
      } else {
        // 处理对象原型
        proto = Object.getPrototypeOf(parent);
        // 利用Object.create切断原型链
        child = Object.create(proto);
      }
      // 处理循环引用
      var index = parents.indexOf(parent);

      if (index != -1) {
        // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
        return children[index];
      }
      parents.push(parent);
      children.push(child);

      for (var i in parent) {
        child[i] = _clone(parent[i]);
      }

      return child;
    };
    return _clone(obj);
  }

  // 函数防抖：一定连续触发的事件，只在最后执行一次，而函数节流一段时间内只执行一次。
  /**
   * 防抖动
   * @param  {Function} fn        [执行的函数]
   * @param  {[type]}   delay     [多少秒之后执行]
   * @param  {[type]}   immediate [是否立即执行]
   * @return {[type]}             []
   */
  debounce(fn, delay, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) fn.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, delay);
      if (callNow) fn.apply(context, args);
    };
  }

  /**
   * 节流
   * @param  {[type]} func  [执行的函数]
   * @param  {[type]} delay [多少秒之内执行一次]
   * @return {[type]}       [description]
   */
  throttle(func, delay) {
    var prev = Date.now();
    return function () {
      var context = this;
      var args = arguments;
      var now = Date.now();
      if (now - prev >= delay) {
        func.apply(context, args);
        prev = Date.now();
      }
    };
  }

  /**
   * 圆形碰撞
   * @param  {[type]} circle1 [description]
   * @param  {[type]} circle2 [description]
   * @return {[type]}         [description]
   */
  circleImpact(circle1, circle2) {
    var r1 = circle1.offsetWidth / 2;
    var l1 = circle1.offsetLeft;
    var t1 = circle1.offsetTop;

    var r2 = circle2.offsetWidth / 2;
    var l2 = circle2.offsetLeft;
    var t2 = circle2.offsetTop;

    var a = l1 + r1 - (l2 + r2);
    var b = t1 + r1 - (t2 + r2);

    var c = Math.sqrt(a * a + b * b);

    if (c >= r1 + r2) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * 矩形碰撞
   * @param  {[type]} rect1 [description]
   * @param  {[type]} rect2 [description]
   * @return {[type]}       [description]
   */
  rectImpact(rect1, rect2) {
    var t1 = rect1.offsetTop;
    var l1 = rect1.offsetLeft;
    var r1 = rect1.offsetLeft + rect1.offsetWidth;
    var b1 = rect1.offsetTop + rect1.offsetHeight;

    var t2 = rect2.offsetTop;
    var l2 = rect2.offsetLeft;
    var r2 = rect2.offsetLeft + rect2.offsetWidth;
    var b2 = rect2.offsetTop + rect2.offsetHeight;

    if (b1 < t2 || l1 > r2 || t1 > b2 || r1 < l2) {
      // 表示没碰上
      return false;
    } else {
      return true;
    }
  }

  /**
   * 图片压缩
   * @param  {[type]}   file [压缩文件]
   * @param  {[type]}   obj  [压缩参数]
   * @param  {Function} cb   [回调函数]
   * @return {[type]}        [返回压缩前和压缩后的格式]
   */
  photoCompress(file, obj, cb) {
    /*
          obj = {
              width: 图片宽,
              height: 图片高,
              quality: 图像质量，
              blob: 是否转换成Blob
          }
       */
    //将以base64的图片url数据转换为Blob
    function convertBase64UrlToBlob(urlData) {
      var arr = urlData.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {
        type: mime
      });
    }

    // canvas 绘制图片
    function canvasDataURL(oldBase64) {
      var img = new Image();
      img.src = oldBase64;
      img.onload = function () {
        var that = this;
        // 默认按比例压缩
        var w = that.width,
          h = that.height,
          scale = w / h;
        w = obj.width || w;
        h = obj.height || w / scale;
        var quality = 0.7; // 默认图片质量为0.7
        //生成canvas
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        // 创建属性节点
        var anw = document.createAttribute('width');
        anw.nodeValue = w;
        var anh = document.createAttribute('height');
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
        ctx.drawImage(that, 0, 0, w, h);
        // 图像质量
        if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
          quality = obj.quality;
        }
        // quality值越小，所绘制出的图像越模糊
        var base64 = canvas.toDataURL('image/jpeg', quality);
        // 回调函数返回base64的值
        if (obj.blob) {
          cb && cb(convertBase64UrlToBlob(base64), convertBase64UrlToBlob(oldBase64));
        } else {
          cb && cb(base64, oldBase64);
        }
      };
    }

    // 读取图片的base64格式
    var ready = new FileReader();
    ready.readAsDataURL(file);
    ready.onload = function () {
      var re = this.result;
      canvasDataURL(re);
    };
  }

  /*获取网址参数*/
  getUrlParams(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var r = decodeURI(window.location.search).substr(1).match(reg);
    if (r != null) return r[2];
    return null;
  }

  /*获取全部url参数,并转换成json对象*/
  getUrlAllParams(url) {
    var url = url ? url : window.location.href;
    var _pa = url.substring(url.indexOf('?') + 1),
      _arrS = _pa.split('&'),
      _rs = {};
    for (var i = 0, _len = _arrS.length; i < _len; i++) {
      var pos = _arrS[i].indexOf('=');
      if (pos == -1) {
        continue;
      }
      var name = _arrS[i].substring(0, pos),
        value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
      _rs[name] = value;
    }
    return _rs;
  }

  /*删除url指定参数，返回url*/
  delParamsUrl(url, name) {
    var baseUrl = url.split('?')[0] + '?';
    var query = url.split('?')[1];
    if (query.indexOf(name) > -1) {
      var obj = {};
      var arr = query.split('&');
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('=');
        obj[arr[i][0]] = arr[i][1];
      }
      delete obj[name];
      var url =
        baseUrl +
        JSON.stringify(obj)
          .replace(/[\"\{\}]/g, '')
          .replace(/\:/g, '=')
          .replace(/\,/g, '&');
      return url;
    } else {
      return url;
    }
  }

  /*获取十六进制随机颜色*/
  getRandomColor() {
    return (
      '#' +
      (function (h) {
        return new Array(7 - h.length).join('0') + h;
      })(((Math.random() * 0x1000000) << 0).toString(16))
    );
  }

  /*图片加载*/
  imgLoadAll(arr, callback) {
    var arrImg = [];
    for (var i = 0; i < arr.length; i++) {
      var img = new Image();
      img.src = arr[i];
      img.onload = function () {
        arrImg.push(this);
        if (arrImg.length == arr.length) {
          callback && callback();
        }
      };
    }
  }

  /*音频加载*/
  loadAudio(src, callback) {
    var audio = new Audio(src);
    audio.onloadedmetadata = callback;
    audio.src = src;
  }

  /*DOM转字符串*/
  domToString(htmlDOM) {
    var div = document.createElement('div');
    div.appendChild(htmlDOM);
    return div.innerHTML;
  }

  /*字符串转DOM*/
  stringToDom(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.children[0];
  }

  /**
   * 光标所在位置插入字符，并设置光标位置
   *
   * @param {dom} 输入框
   * @param {val} 插入的值
   * @param {posLen} 光标位置处在 插入的值的哪个位置
   */
  setCursorPosition(dom, val, posLen) {
    var cursorPosition = 0;
    if (dom.selectionStart) {
      cursorPosition = dom.selectionStart;
    }
    this.insertAtCursor(dom, val);
    dom.focus();
    console.log(posLen);
    dom.setSelectionRange(dom.value.length, cursorPosition + (posLen || val.length));
  }

  /*光标所在位置插入字符*/
  insertAtCursor(dom, val) {
    if (document.selection) {
      dom.focus();
      sel = document.selection.createRange();
      sel.text = val;
      sel.select();
    } else if (dom.selectionStart || dom.selectionStart == '0') {
      let startPos = dom.selectionStart;
      let endPos = dom.selectionEnd;
      let restoreTop = dom.scrollTop;
      dom.value = dom.value.substring(0, startPos) + val + dom.value.substring(endPos, dom.value.length);
      if (restoreTop > 0) {
        dom.scrollTop = restoreTop;
      }
      dom.focus();
      dom.selectionStart = startPos + val.length;
      dom.selectionEnd = startPos + val.length;
    } else {
      dom.value += val;
      dom.focus();
    }
  }
}
// ————————————————————————————————————————————————————————————————
// 插件方法集合
class WXY extends mix(TypeFn, MyArrayFn, DateFn, StorageFn, StringFn, NumberFn, Base64, DomFn, RequestFn, OtherFn) {
  // 两个数之间的过渡
  slow({ val, toVal, callback, controlSpeed = 3, fluent = 30 } = {}) {
    const info = { sum: parseInt(val), toValue: parseInt(toVal) };
    clearInterval(info.timer);
    info.timer = setInterval(function () {
      let stop = true;
      let value = info.sum;
      let speed = (info.toValue - value) / controlSpeed;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
      if (value != toVal) stop = false;
      info.sum = value + speed;
      callback && callback(info.sum);
      if (stop) {
        clearTimeout(info.timer);
        // callback&&callback(value);
      }
    }, fluent);
  }
  // 给Set结构添加修改方法
  setConstruction(set, key, val) {
    if (set.has(key)) set.delete(key);
    set.add(val);
  }
  setConstruction2(set, key, val) {
    return new Set(Array.from(set, item => (Object.is(item, key) ? val : item)));
  }
  // 传入这两个或两个以上有序数组合并返回一个从小到大排列且不重复的有序数组
  packedArray(...rest) {
    return [...new Set([...[...rest].flat(1)])].sort((a, b) => a - b);
  }
  promiseAjax(options) {
    let url = options.url;
    let type = options.type || 'get';
    let data = options.data || {};
    let async = options.async || true;
    let str = '';
    for (let [key, value] of Object.entries(data)) {
      str += key + '=' + value + '&';
    }
    return new Promise((resolve, reject) => {
      const x = new XMLHttpRequest();
      if (type.toLowerCase() === 'get') {
        x.open('get', `${url}?${str}t=${Date.now()}`, async);
        x.send();
      }
      if (type.toLowerCase() === 'post') {
        x.setRequestHeader('content-type', 'application/www-from-urlencoded');
        x.open('post', url, async);
        x.send(str.substring(0, str.length - 1));
      }
      x.addEventListener('readystatechange', function () {
        if (!Object.is(this.readyState, 4)) return;
        if (this.status.toString().startsWith('2')) {
          //成功啦
          resolve(this.response);
        } else {
          //如果失败
          reject('出错了,状态码为', this.status);
        }
      });
    });
  }
  async promiseGetJson(url) {
    // 发送 AJAX 请求, 返回的结果是 Promise 对象
    return await new Promise((resolve, reject) => {
      //1. 创建对象
      const x = new XMLHttpRequest();
      //2. 初始化
      x.open('GET', url);
      //3. 发送
      x.send();
      //4. 事件绑定
      x.addEventListener('readystatechange', function () {
        if (!Object.is(this.readyState, 4)) return;
        if (this.status >= 200 && this.status < 300) {
          //成功啦
          resolve(this.response);
        } else {
          //如果失败
          reject(this.status);
        }
      });
    });
  }
  $(css, el = document) {
    return el.querySelector(css);
  }
  _(css, el = document) {
    return el.querySelectorAll(css);
  }
  // 计算数组中元素的出现次数，并以对象的形式返回
  arrElementNumToObj(arr) {
    return arr.reduce(function (allItems, item) {
      if (item in allItems) {
        allItems[item]++;
      } else {
        allItems[item] = 1;
      }
      return allItems;
    }, {});
  }
  // 按属性对Object分类
  groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }
  // 对数组进行不区分大小写写的排序
  localeCompareSort(arr) {
    return arr.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
  }
  // 该函数用来判断某一个元素是否在可视区域
  isVisible(element) {
    let viewport = document.documentElement;
    // getBoundingClientRect方法（所有的元素结点上都有这个方法）返回一个对象，提供当前元素节点的大小、位置等信息，基本上就是 CSS 盒状模型的所有信息。
    let rect = element.getBoundingClientRect();
    // 用户不管是从上向下、从下向上、从左向右、从右向左滑动，都可以判断当前元素是否在可视区域
    return rect.top < viewport.clientHeight && rect.bottom > 0 && rect.left < viewport.clientWidth && rect.right > 0;
  }
  // 加载图片
  lazyLoadImg(imgArr, dataName) {
    imgArr.forEach((item, index) => {
      if (this.isVisible(item)) {
        item.src = item.dataset[dataName];
        imgArr.splice(index, 1);
      }
    });
  }
  //获取星星
  /**
   * num:表示当前指定开启星星的数量 4
   * len:表示默认星星的数量  5
   * url:表示图片路径  "./images"
   * name:表示默认星星的前缀名 'no-'
   * str：表示图片的类型（png/jpg...）
   * loadingStar(item.star, 5, "./images/", "no-", "png")
   */
  loadingStar(num, len, url, name, str) {
    return Array.from({ length: len }, (item, index) => `<img src="${url}${index > num - 1 ? name : ''}star.${str}">`).join('');
  }
  // 获取现在时间
  getNowTime() {
    this.time = new Date();
    this.year = this.time.getFullYear();
    this.month = this.time.getMonth() + 1;
    this.date = this.time.getDate();
    this.hour = this.time.getHours();
    this.minute = this.time.getMinutes();
    this.second = this.time.getSeconds();
    return this.time;
  }
  // 判断是否是一个数组
  isArray(arr) {
    return Array.isArray(arr);
  }
  // 判断是否是一个函数(四种)
  isFunctionO(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]';
  }
  isFunctionC(fn) {
    return fn.constructor === Function;
  }
  isFunctionI(fn) {
    return fn instanceof Function;
  }
  isFunctionT(fn) {
    return typeof fn === 'function';
  }
  // 数组去重(两种)
  newArrS(arr) {
    const set = new Set(arr);
    return [...set];
  }
  newArrI(arr) {
    const newArr = [];
    for (let item of arr) {
      if (!newArr.includes(item)) {
        newArr.push(item);
      }
    }
    return newArr;
  }
  //1-递归实现深拷贝
  deepCopy(obj) {
    const objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === 'object') {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] && typeof obj[key] === 'object') {
            objClone[key] = deepCopy(obj[key]);
          } else {
            objClone[key] = obj[key];
          }
        }
      }
    }
    return objClone;
  }
  // 1.1-递归实现深拷贝
  deepClone(origin, target) {
    var target = target || {},
      toStr = Object.prototype.toString,
      arrStr = '[object Array]';
    for (let prop in origin) {
      if (origin.hasOwnProperty(prop)) {
        if (origin[prop] != 'null' && typeof origin[prop] == 'object') {
          //判断原型链
          target[prop] = toStr.call(origin[prop]) == arrStr ? [] : {}; //判断obj的key是否是数组
          deepClone(origin[prop], target[prop]); //递归的方式
        } else {
          target[prop] = origin[prop];
        }
      }
    }
    return target;
  }
  /*使用方式
      const newObj={};
      deepClone(obj,newObj);
      console.log(newObj);
     */
  //2-JSON.parse/stringify
  deepCopyPS(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  //3-Jquery中的extend方法 $.extend(第一参数true/false(是否深拷贝), 第二参数目标对象其他对象的成员属性将被附加到该对象上,第三参数Object1-objectN可以写n个要拷贝的对象)
  deepCopyJQ(obj) {
    return $.extend(true, Array.isArray(obj) ? [] : {}, obj);
  }

  //将集合转换成数组
  makeListToArray(list) {
    let arr = [];
    for (let i = 0; i < list.length; i++) {
      arr.push(list[i]);
    }
    return arr;
  }
  // cookie封装

  cookie(type, key, value, day) {
    const _this = this;
    switch (type) {
      case 'set':
        let date = new Date();
        day = day || 1;
        date.setTime(date.getTime() + day * 24 * 60 * 60 * 1000);
        let expires = 'expires=' + date.toUTCString();
        document.cookie = key + '=' + value + ';' + expires + ';path=/';
        console.log('cookie设置成功!');
        break;
      case 'get':
        let ck = document.cookie;
        let arr = ck.split(';');
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
          obj[arr[i].split('=')[0]] = arr[i].split('=')[1];
        }
        console.log('cookie获取成功!');
        return obj[key] ? obj[key] : obj[' ' + key];
        break;
      case 'getAll':
        let ckAll = document.cookie;
        let arrAll = ckAll.split(';');
        let objAll = {};
        for (let i = 0; i < arrAll.length; i++) {
          objAll[arrAll[i].split('=')[0]] = arrAll[i].split('=')[1];
        }
        console.log('cookie获取成功!');
        return objAll;
        break;
      case 'remove':
        _this.cookie('set', key, _this.cookie('get', key), -1);
        console.log('cookie移除完成!');
        break;
      case 'removeAll':
        const getAllObj = _this.cookie('getAll');
        for (let keyVal in getAllObj) {
          if (!getAllObj[keyVal]) return;
          _this.cookie('set', keyVal, _this.cookie('get', keyVal), -1);
        }
        console.log('cookie移除完成!');
        break;
    }
  }

  //ajax--promise
  /**@用法
     *  getJSON("/posts.json").then(function(json) {
          console.log('Contents: ' + json);
        }, function(error) {
          console.error('出错了', error);
        });
     * */
  getJSON(url) {
    const promise = new Promise(function (resolve, reject) {
      const handler = function () {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
      const client = new XMLHttpRequest();
      client.open('GET', url);
      client.onreadystatechange = handler;
      client.responseType = 'json';
      client.send();
    });
    return promise;
  }
  /**
   * @描述 获取随机数
   * @函数 Random
   * @参数   min 最小值
   *     max最大值
   *     最小值到最大值之间的随机一个整数
   * */
  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //随机颜色
  randomColor() {
    return `rgba(${this.random(0, 255)},${this.random(0, 255)},${this.random(0, 255)},${Math.random()})`;
  }

  /**
   * @描述 随机排序 给一个数组随机排序
   * @函数 RandomSort
   * @参数   arr 数组 callback回调函数 参数为随机元素
   * @返回值 随机排序后的数组
   * */
  randomSort(ar, callback) {
    // new Set(ar)
    let _this = this;
    let arr = Array.from(ar);
    let newArr = [],
      rad;
    newArr = Array.from(ar, (item, index) => {
      rad = _this.random(0, arr.length - 1);
      return arr.splice(rad, 1)[0];
    });
    callback && callback(newArr);
    return newArr;
  }
  /**
   * @描述 从类数组的开始位置截取并生成新的数组
   * @函数 ListToArray
   * @参数 list 类数组 start开始截取的位置
   * */
  listToArray(list, start = 0) {
    let i = list.length - start;
    let ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret;
  }

  //去除字符串空格(包含三种情况)
  trimSE(str) {
    return str.replace(/^[" "||"　"]*/, '').replace(/[" "|"　"]*$/, ''); // 去除头和尾
  }
  trim(str) {
    return str.replace(/\s/g, ''); //去除所有空格
  }
  trimR(str) {
    return str.replace(/(\s*$)/g, ''); //去除右边所有空格
  }
  //判断是否为邮箱地址
  isEmail(emailStr) {
    let reg = /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]*)*@[a-zA-Z0-9]+.[a-zA-Z0-9{2,5}$]/;
    let result = reg.test(emailStr);
    if (result) {
      return 1;
    } else {
      return 0;
    }
  }
  //判断是否是手机号
  isMobilePhone(phone) {
    let reg = /^1\d{10}$/;
    if (reg.test(phone)) {
      return 1;
    } else {
      return 0;
    }
  }
  //location.hash返回的#a=1值或者location.search返回的?a-=1值，转为对象
  //可选值"hash"/"search"
  hsToObj() {
    const obj = {};
    const str = location.hash ? location.hash : location.search;
    const hashArr = str.substring(1).split('&');
    for (let item of hashArr) {
      obj[item.split('=')[0]] = decodeURI(item.split('=')[1]);
    }
    return obj;
  }
  //生成指定两个整数之间的数组
  createNumberArr(start, end) {
    return Array.from({ length: end - start < 0 ? start - end + 1 : end - start + 1 }, () => {
      if (end - start < 0) {
        return start--;
      }
      return start++;
    });
  }
  //生成26个英文字母
  createLetterArr(start, end) {
    let s = start.codePointAt();
    let e = end.codePointAt();
    return Array.from({ length: e - s < 0 ? s - e + 1 : e - s + 1 }, () => {
      if (e - s < 0) {
        return String.fromCodePoint(s--);
      }
      return String.fromCodePoint(s++);
    });
  }

  // ------------------------------------------
  /**
   * @描述 完美框架函数
   * @函数 packagingMethod
   * @参数 el表示要控制的元素(必填)
   * @参数 attributeGroup表示属性组 例{"left":80}(必填)
   * @参数 callback回调函数(可选)
   * @参数 controlSpeed表示控制速度值为整数数字Number 默认是8 值越大越慢(可选)
   * @参数 fluent表示流畅度 默认是30 值越大速度越慢并且也会卡顿，要和controlSpeed的值互相搭配,使元素运动的更流畅(可选)
   * */
  perfectMovement({ el, attributeGroup, callback, controlSpeed = 8, fluent = 30 } = {}) {
    clearInterval(el.timer);
    el.timer = setInterval(function () {
      let stop = true;
      for (let attr in attributeGroup) {
        let value = 0;
        if (attr == 'opacity') {
          value = Math.round(parseFloat(getComputedStyle(el, false)[attr]) * 100);
        } else {
          value = parseInt(getComputedStyle(el, false)[attr]);
        }
        let speed = (attributeGroup[attr] - value) / controlSpeed;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (value != attributeGroup[attr]) stop = false;
        if (attr == 'opacity') {
          value += speed;
          el.style.filter = `alpha(opacity:${value})`;
          el.style.opacity = value / 100;
        } else {
          el.style[attr] = value + speed + 'px';
        }
      }
      if (stop) {
        clearInterval(el.timer);
        if (callback) callback.call(el);
      }
    }, fluent);
  }
  // 求数组最大值和最小值
  max(arr) {
    return Math.max.apply(null, arr);
  }

  min(arr) {
    return Math.min.apply(null, arr);
  }
  // 函数防抖
  /**@debounce 防抖函数
   * @参数 fn 传一个函数，内部可以写操作
   * @参数 space间隔时间表示space秒内只执行最后一次操作
   * */
  debounce(fn, space) {
    return function () {
      if (this.debounceTimer) clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        console.log(this);
        fn.apply(this, arguments);
      }, space);
    };
  }
  // 函数节流
  throttle(fn, space) {
    return function () {
      if (this.throttleTimer) return;
      this.throttleTimer = setTimeout(() => {
        fn.apply(this,arguments);
        this.throttleTimer = null;
      }, space);
    };
  }
  throttleF(fn, space) {
    let flag = true;
    return function () {
      if (!flag) return;
      flag = false;
      setTimeout(() => {
        fn.apply(this, arguments);
        flag = true;
      }, space);
    };
  }
}

// _______________________________________________________________________________________________
// 轮播图
class BannerTools extends WXY {
  constructor($bannerBox, $bannerList, _bannerLis, $dottedList, _dottedLis, $prev, $next, $ddClassName, $ddXbName, $lisXbName, _newLis) {
    super();
    [
      this.box, //轮播图外层盒子元素
      this.list, //轮播图的整体列表
      this.lis, //轮播图列表里的单个轮播
      this.ddList, //下方圆点列表
      this.ddLis, //下方单个圆点
      this.prev, //上一个按钮
      this.next, //下一个按钮
      this.len, //轮播图整体的个数
      this.wid, //每个轮播的宽度
      this.index, //初始下标
      this.time, //自动轮播的变量
      this.ddCn, //小圆点的类名
      this.ddXb, //小圆点的下标属性名称
      this.lisXb, //每个轮播图列表项的下标属性名称
      this.newLis //重新获取轮播图列表元素
    ] = [$bannerBox, $bannerList, _bannerLis, $dottedList, _dottedLis, $prev, $next, _bannerLis.length, _bannerLis[0].offsetWidth, 0, null, $ddClassName, $ddXbName, $lisXbName, _newLis];
  }
  // 克隆节点
  cloneNode() {
    this.list.appendChild(this.lis[0].cloneNode(true));
    this.newLis = super._(this.newLis);
  }
  // 上一个按钮的点击事件
  prevEvent(_this) {
    this.prev.onclick = function (e) {
      _this.prevNextEvent('prev');
    };
  }
  // 下一个按钮的点击事件
  nextEvent(_this) {
    this.next.onclick = function (e) {
      _this.prevNextEvent('next');
    };
  }
  // 小圆点按钮的点击事件
  ddLisEvent(_this) {
    const _super = super.makeListToArray(_this.ddLis);
    const _super$ = super.$;
    super.makeListToArray(_this.ddLis).forEach(el => {
      el.onclick = function (e) {
        _super.forEach(el => {
          el.classList.remove(_this.ddCn);
        });
        _this.prevNextEvent(null, 'ddLisTab', this);
        // _super$(".item").style.width = (_super$("li.on").getAttribute("xb") * 1 + 1) * 20 + "%"//进度条
      };
    });
  }
  // 自动轮播
  autoEvent(_this) {
    clearInterval(this.time);
    this.time = setInterval(() => {
      _this.prevNextEvent('next');
    }, 3000);
  }
  // 划入事件
  hoverEvent(_this) {
    this.box.onmouseover = function (e) {
      clearInterval(_this.time);
    };
    this.box.onmouseleave = function (e) {
      _this.autoEvent(_this);
    };
  }
  // 上一个下一个轮播事件集合
  /**
   *
   * @param {可选值"next"/"prev"} o
   * @param {默认值prevNext,可选值"prevNext"/"ddLisTab"} type
   * @param {表示要指定的元素} tar
   */
  prevNextEvent(o, type = 'prevNext', tar) {
    const _this = this;
    switch (type) {
      case 'prevNext':
        switch (o) {
          case 'next':
            this.index++;
            if (this.index > this.len) {
              this.index = 1;
              this.list.style.left = '0';
            }
            break;
          case 'prev':
            this.index--;
            if (this.index < 0) {
              this.index = this.len - 1;
              this.list.style.left = -this.wid * this.len + 'px';
            }
            break;
        }
        super.makeListToArray(_this.ddLis).forEach(el => {
          el.classList.remove(_this.ddCn);
        });
        _this.ddLis[_this.newLis[_this.index].getAttribute(_this.lisXb) * 1].classList.add(_this.ddCn);
        // super.$(".item").style.width = (super.$("li.on").getAttribute("xb") * 1 + 1) * 20 + "%";//进度条
        super.packagingMethod({
          el: _this.list,
          attributeGroup: {
            left: -_this.wid * _this.index
          }
        });
        break;
      case 'ddLisTab':
        tar.classList.add(_this.ddCn);
        super.packagingMethod({
          el: _this.list,
          attributeGroup: {
            left: -_this.wid * tar.getAttribute(_this.ddXb)
          },
          callback() {
            _this.index = tar.getAttribute(_this.ddXb) * 1;
          }
        });
        break;
    }
  }
  // 初始化
  init() {
    this.cloneNode();
    this.prevEvent(this);
    this.nextEvent(this);
    this.ddLisEvent(this);
    this.autoEvent(this);
    this.hoverEvent(this);
  }
}
// 倒计时场次
class CountDownTime {
  /**
   * [getDate 获取现在时间]
   */
  getNowDate() {
    this.time = new Date();
    this.year = this.time.getFullYear();
    this.month = this.time.getMonth() + 1;
    this.date = this.time.getDate();
    this.hour = this.time.getHours();
    this.minute = this.time.getMinutes();
    this.second = this.time.getSeconds();
    return this.time;
  }

  /**
   * [customTime 自定义时间]
   * @参数elVal  放置指定时间  元素的值
   */
  customTime(elVal) {
    this.defineDates = new Date(`${this.GetsTheYearMonthAndDay()} ${elVal}`);
    this.defineHours = this.defineDates.getHours();
    this.defineMinutes = this.defineDates.getMinutes();
    this.defineSeconds = this.defineDates.getSeconds();
    return this.defineDates;
  }

  /**
   * [futureTime 未来的时间]
   * @return {[type]} [description]
   */
  futureTime(djs, elVal) {
    this.customTime(elVal);
    this.futureTimes = new Date(`${this.GetsTheYearMonthAndDay()} ${this.defineHours + djs}:${this.defineMinutes}:${this.defineSeconds}`);
    return this.futureTimes;
  }
  /**
   * [countDownTimes 倒计时时间]
   * @param  {[type]} djs   [description]
   * @param  {[type]} elVal [description]
   * @return {[type]}       [description]
   */
  countDownTimes(type) {
    switch (type) {
      case 'down':
        this.Down = (this.futureTimes - this.time) / 1000;
        break;
      case 'start':
        this.Down = (this.defineDates - this.time) / 1000;
        break;
    }
    this.H = parseInt((this.Down % (3600 * 24)) / 3600);
    this.M = parseInt((this.Down % 3600) / 60);
    this.S = parseInt(this.Down % 60);
    return this.Down;
  }

  /**
   * [GetsTheYearMonthAndDay 获取年月日]
   */
  GetsTheYearMonthAndDay() {
    return `${this.year}/${this.month}/${this.date}`;
  }

  /**
   * [conditionalJudgment 条件判断]
   */
  conditionalJudgment(djs, elVal) {
    this.getNowDate();
    this.customTime(elVal);
    this.futureTime(djs, elVal);
    if (this.time >= this.defineDates) {
      this.countDownTimes('down');
      if (this.H <= 0 && this.M <= 0 && this.S <= 0) {
        clearInterval(this.timeTT);
        return ['stop', '00', '00', '00'];
      }
      if (this.H > 0 || this.M > 0 || this.S > 0) {
        return ['distanceEnd', this.zeroIze(this.H), this.zeroIze(this.M), this.zeroIze(this.S)];
      }
    } else {
      this.countDownTimes('start');
      return ['distanceStart', this.zeroIze(this.H), this.zeroIze(this.M), this.zeroIze(this.S)];
    }
  }

  /**
   * [zeroIze 补零]
   */
  zeroIze(num) {
    return num < 10 ? '0' + num : num;
  }

  init({ countDownTime, elVal, callback }) {
    clearInterval(this.timeTT);
    this.timeTT = setInterval(() => {
      callback && callback(this.conditionalJudgment(countDownTime, elVal));
    }, 1000);
  }
}
// ————————————————————————————————————————————————————————
// indexDB
class StoreIndexDB extends WXY {
  constructor({ dbName, dbVersion, listName }) {
    [this.dbName, this.dbVersion, this.listName] = [dbName, dbVersion, listName];
  }

  /**
   * [createIndexedDB 创建数据库]
   * @参数 dbName仓库名称--dbVersion版本号--listName表的名称 resolve(this.idb的值)
   */
  createIndexedDB({ dbName, dbVersion, listName }, resolve) {
    const request = globalThis.indexedDB.open(dbName, dbVersion);
    // 成功
    class successEvent {
      constructor(e) {
        this.idb = e.target.result;
        resolve && resolve(this.idb);
        console.log('数据库连接成功！');
      }
    }
    // 失败
    function errorEvent(e) {
      console.log('数据库连接失败！');
    }
    // 更新
    class upgradeneededEvent {
      constructor(e) {
        this.idb = e.target.result;
        resolve && resolve(this.idb);
        const XX = e.target.transaction;
        //----------------------创建表----------------------
        listName.forEach(el => {
          if (!this.idb.objectStoreNames.contains(el)) {
            const STORE = this.idb.createObjectStore(el, {
              keyPath: 'id',
              autoIncrement: true
            });
            // 创建对象仓库索引
            {
              //------------需要手动添加指定的索引
              STORE.createIndex('userName', 'userName', { unique: true });
              STORE.createIndex('sex', 'sex', { unique: false });
              STORE.createIndex('phone', 'phone', { unique: true });
              STORE.createIndex('email', 'email', { unique: false });
              STORE.createIndex('grade', 'grade', { unique: false });
              STORE.createIndex('address', 'address', { unique: false });
              STORE.createIndex('age', 'age', { unique: false });
              STORE.createIndex('date', 'date', { unique: false });
              STORE.createIndex('native', 'native', { unique: false });
              STORE.createIndex('manager', 'manager', { unique: false });
              //------------
            }
          }
        });
        //--------------------------------------------
        XX.onabort = function () {
          console.log('对象仓库创建失败!');
        };
        XX.onsuccess = function () {
          console.log('对象仓库创建成功!');
        };
      }
    }
    request.addEventListener('success', successEvent.bind(this), false);
    request.addEventListener('error', errorEvent.bind(this), false);
    request.addEventListener('upgradeneeded', upgradeneededEvent.bind(this), false);
  }

  /**
   * @描述 operateDB  添加或修改对象仓库
   * @描述 db
   * @描述 listName 对象指定的仓库
   * @参数pointListName 指定对象仓库
   * @参数obj 添加的键值对
   */
  operateDB(db, listName, pointListName, obj, callback) {
    console.log(db);
    const XX = db.transaction(listName, 'readwrite');
    const STORE = XX.objectStore(pointListName);
    STORE.put(obj);
    XX.oncomplete = function () {
      console.log('数据插入成功！');
      callback && callback();
    };
    XX.onabort = function () {
      console.log('数据插入失败！');
    };
  }

  /**
   * [delDB 删除仓库数据]
   * @param  {[type]} db   [idb]
   * @param  {[type]} list [listName]
   * @param  {[type]} id   [指定id名]
   * @return {[type]}      [description]
   */
  delDB(db, list, id) {
    const XX = db.transaction([list], 'readwrite');
    const STORE = XX.objectStore(list);
    STORE.delete(id);
    console.log('删除成功');
  }

  /**
   * [queryDB 数据查询]
   * @参数db数据库  listName对象仓库
   *   bound
   *   IDBKeyRange中的方法（lowerBound,upperBound,bound,only）
   *   val 查询条件  IDBKeyRange.only('aa')
   *   index 索引   STORE.index('name').openCursor(RANGE)
   */
  queryDB(db, listName, bd, val, index, callback) {
    const XX = db.transaction([listName], 'readonly');
    const STORE = XX.objectStore(listName);
    const Range = IDBKeyRange[bd](val);
    const request = STORE.index(index).openCursor(Range);
    request.onsuccess = function (e) {
      const cursor = e.target.result;
      if (cursor) {
        callback(cursor);
        cursor.continue();
      } else {
        callback(null);
        console.log('搜索结束');
      }
    };
  }

  init(resolve) {
    this.createIndexedDB(
      {
        dbName: this.dbName,
        dbVersion: this.dbVersion,
        listName: this.listName
      },
      resolve
    );
    console.log(this);
  }
}
// ——————————————————————————————————————
// rem适配
class RemAdaptive extends WXY {
  init() {
    (function (doc, win) {
      const docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recount = function () {
          const clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          if (clientWidth >= 750) {
            docEl.style.fontSize = '100px';
          } else {
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
          }
        };

      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recount, false);
      doc.addEventListener('DOMContentLoaded', recount, false);
    })(document, window);
  }
}
// ——————————————————————————————————————————————————————
// 懒加载
class LazyLoading extends WXY {
  constructor() {
    super();
  }
  intersectionObserverLazyLoad(attr) {
    let _this = this;
    let lazyLoadObserve = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        let lazyImage = entry.target;
        if (entry.intersectionRatio > 0) {
          lazyImage.src = lazyImage.dataset[attr];
          lazyLoadObserve.unobserve(lazyImage);
        }
      });
    });
    for (let item of _this.imgs) {
      lazyLoadObserve.observe(item);
    }
  }

  scrollLazyLoad(dataName, _this) {
    let imgArr = this.imgs;
    let _superLazyLoadImg = super.lazyLoadImg.bind(this);
    // 一开始先执行一次，把在第一次进入页面时在可视区域的图片加载出来
    _superLazyLoadImg(imgArr, dataName);

    let timer = null;
    document.addEventListener('scroll', function () {
      // 一个简单的防抖处理
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        // 页面滚动的时候，不断有新的图片进入可视区域，此时再调用lazyLoadImg函数
        _superLazyLoadImg(imgArr, dataName);
      }, 100);
    });
  }
  init(css, dataName) {
    this.imgs = [...super._(css)];
    if (globalThis.IntersectionObserver) {
      this.intersectionObserverLazyLoad(dataName);
    } else {
      this.scrollLazyLoad(dataName, super.isVisible);
    }
  }
}
// _________________________________________________
// 图片瀑布流
class Falls extends LazyLoading {
  constructor() {
    super();
  }
  // 图片加载
  showLoading(imgNumS, dataName, imgArr) {
    const _superRandomArr = super.randomSort.bind(this);
    const _this = this;
    const _thisContainers = this.containers;
    Array.from({ length: imgNumS }, (item, index) => {
      let minH = _thisContainers[0].offsetHeight;
      let minCon = _thisContainers[0];
      Array.from(_thisContainers, (item, index) => {
        if (item.offsetHeight < minH) {
          minH = item.offsetHeight;
          minCon = item;
        }
      });
      let div = document.createElement('div');
      div.innerHTML = `<img src="${_superRandomArr(imgArr)[0]}">`;
      minCon.appendChild(div);
    });
  }

  // 滚动到底部执行无底循环
  // distance 底部距离
  scrollHandler(distance, imgNumS, dataName, imgArr) {
    const _this = this;
    const _superInit = super.init.bind(this);
    window.addEventListener(
      'scroll',
      function () {
        let htmlHeight = document.documentElement.offsetHeight;
        let st = document.documentElement.scrollTop;
        if (htmlHeight > distance) {
          return;
        }
        if (st + window.innerHeight >= htmlHeight - 200) {
          clearTimeout(this.tt);
          this.tt = setTimeout(() => {
            _this.showLoading(imgNumS, dataName, imgArr);
          }, 100);
        }
      },
      false
    );
  }
  /**
   * containers:每列图片元素
   * imgNumS:图片的总个数
   * imgArr:要缓存的图片数组
   * laz:是否懒加载图片
   * dataName:图片的data-的名称
   * distance距离底部的距离--例10000
   */
  init({ containers, imgNumS, imgArr, dataName, distance = 10000 } = {}) {
    const _this = this;
    const _superInit = super.init.bind(this);
    this.containers = containers;
    this.imgs = Array.from(imgArr, (item, index) => {
      let img = new Image();
      img.src = item;
      return img;
    });
    this.imgs[this.imgs.length - 1].addEventListener('load', function () {
      _this.showLoading(imgNumS, dataName, imgArr);
    });
    this.scrollHandler(distance, imgNumS, dataName, imgArr);
  }
}
class FuzzySearch extends WXY {
  /**
   * 测试条件：一个长度为100的数组，每个方法测试50次，取平均值。
   * indexOf 方法耗费时间： 0.048ms
   * split 方法耗费时间：0.037ms
   * match 方法耗费时间： 0.178ms
   * test 方法耗费时间： 0.039ms
   */
  /**
   * 使用indexOf方法实现模糊查询
   * @param  {Array}  list     进行查询的数组
   * @param  {String} keyWord  查询的关键词
   * @return {Array}           查询的结果
   */
  fuzzyQueryIndexOf(list, keyWord) {
    return Array.from(list).filter(item => item.indexOf(keyWord) >= 0);
  }
  /**
   * 使用spilt方法实现模糊查询
   * @param  {Array}  list     进行查询的数组
   * @param  {String} keyWord  查询的关键词
   * @return {Array}           查询的结果
   */
  fuzzyQuerySplit(list, keyWord) {
    return Array.from(list).filter(item => item.split(keyWord).length > 1);
  }
  /**
   * 使用match方法实现模糊查询
   * @param  {Array}  list     进行查询的数组
   * @param  {String} keyWord  查询的关键词
   * @return {Array}           查询的结果
   * 性能有点差
   */
  fuzzyQueryMatch(list, keyWord) {
    return Array.from(list).filter(item => item.match(keyWord) != null);
  }
  /**
   * 使用test方法实现模糊查询
   * @param  {Array}  list     原数组
   * @param  {String} keyWord  查询的关键词
   * @return {Array}           查询的结果
   * 推荐使用，可扩展性更强，可以添加修改正则，达到要查找复杂数据的目的
   */
  fuzzyQueryTest(list, keyWord) {
    const reg = new RegExp(keyWord);
    return Array.from(list).filter(item => reg.test(item));
  }
}
// _________________________________________________________
//_______________________________________________
//窗口改变监听
class ResizeListener extends WXY {
  constructor(callback) {
    super();
    const docEl = document.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recount = function () {
        const clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (callback) {
          callback();
        } else {
          console.log(clientWidth);
        }
      };
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recount, false);
    document.addEventListener('DOMContentLoaded', recount, false);
  }
}
// 移动端的惯性滚动监听
class InertanceScrollListener extends WXY {
  constructor({ container, ingCallBack, endCallBack } = {}) {
    super();
    this.scrollInfo = {};
    this.endEventHandler({
      containerCss: container,
      ingFn: ingCallBack,
      endFn: endCallBack
    });
  }
  endEventHandler({ containerCss, ingFn, endFn } = {}) {
    const _this = this;
    const $ = super.$;
    this.container = $(containerCss);
    this.container.addEventListener('touchend', function (e) {
      _this.slidingStart.call(_this, e, ingFn, endFn);
    });
  }
  slidingStart(e, ingFn, endFn) {
    if (ingFn && endFn) {
      this.slidingCore(ingFn, endFn);
    } else if (ingFn) {
      this.slidingCore(ingFn);
    } else if (endFn) {
      this.slidingCore(null, endFn);
    } else {
      this.slidingCore();
    }
  }
  slidingCore(ingFn, endFn) {
    const _this = this;
    const $ = super.$;
    _this.scrollInfo.scrollWidth = _this.container.scrollLeft;
    // console.log(_this.scollInfo.scrollWidth,_this.container.scrollLeft)
    //一次滚动只会触发一次位置纠正，所以要覆盖掉上一次延时任务
    clearTimeout(_this.scrollInfo.timer);
    _this.scrollInfo.timer = setTimeout(function () {
      if (_this.scrollInfo.scrollWidth == _this.container.scrollLeft) {
        try {
          if (endFn) {
            endFn();
          } else {
            console.log('执行到了回调函数：slidingEnd');
          }
        } catch (e) {
          console.log('出错了:' + e);
        }
      } else {
        if (ingFn) {
          ingFn();
          _this.slidingCore(ingFn, endFn);
        } else {
          _this.slidingCore(null, endFn);
        }
      }
    }, 20);
  }
}

// ________________________________________
// 移动端拖拽效果
class DragMove extends WXY {
  constructor({ parentCss, childCss, startFn, moveFn, endFn } = {}) {
    super();
    let x, y, flag;
    const $ = super.$;
    const child = $(childCss);
    const parent = $(parentCss);
    let w = parent.clientWidth - child.offsetWidth;
    let h = parent.clientHeight - child.offsetHeight;

    child.addEventListener('touchstart', function (e) {
      startFn && startFn(e);
      flag = true;
      x = e.touches[0].clientX - child.offsetLeft;
      y = e.touches[0].clientY - child.offsetTop;
      child.addEventListener('touchmove', function (e) {
        if (flag) {
          moveFn && moveFn(e);
          child.style.left = e.touches[0].clientX - x + 'px';
          child.style.top = e.touches[0].clientY - y + 'px';
          if (child.offsetLeft < 0) child.style.left = 0;
          if (child.offsetTop < 0) child.style.top = 0;
          if (child.offsetLeft > w) child.style.left = w + 'px';
          if (child.offsetTop > h) child.style.top = h + 'px';
        }
      });
      child.addEventListener('touchend', function (e) {
        endFn && endFn(e);
        flag = false;
      });
    });
  }
}
// ————————————————————————————————
/**
 * 移动端滚动条联动
 * 结构
 * <div class="container">
        <ul>
          <li class="containerItem">
            内容
          </li>
        </ul>
      </div>
      <div class="scrollContainer">
        <p class="scrollBar">
          <span class="scrollBarItem"></span>
        </p>
      </div>
*/
class ScrollBarEventListener extends WXY {
  /**
   * @description
   * @author zk
   * @param {*} [{ containerCss, containerItemCss, scrollBarCss, scrollBarItemCss }={}]
   * @memberof ProgressScroll
   * 容器css  容器子项css 滚动条容器css 滚动条子项容器css
   */
  constructor({ containerCss, containerItemCss, scrollBarCss, scrollBarItemCss } = {}) {
    super();
    {
      const _this = this;
      // // 初始化
      // this.scrollTopEventHandler(containerCss, containerItemCss, scrollBarItemCss);
      // // 调用下方滚动条操作事件
      // this.scrollBottomEventHandler(scrollBarCss, scrollBarItemCss, containerCss);
      // //滚动条的点击事件
      // this.scrollBottomClick(scrollBarCss, scrollBarItemCss, containerCss)
      // // 改变窗口大小时重新获取滚动条
      const resizeListener = new ResizeListener(function () {
        _this.scrollTopEventHandler(containerCss, containerItemCss, scrollBarItemCss);
        _this.scrollBottomEventHandler(scrollBarCss, scrollBarItemCss, containerCss);
        _this.scrollBottomClick(scrollBarCss, scrollBarItemCss, containerCss);
      });
    }
    console.log(containerCss, containerItemCss, scrollBarCss, scrollBarItemCss);
  }
  // 容器的的滚动事件
  scrollTopEventHandler(containerCss, containerItemCss, scrollBarItemCss) {
    // 按下X轴下标，移动X轴下标，标记，滚动X轴下标
    let downX, moveX, flag, scrollX;
    // 父级的$方法
    const $ = super.$;
    // 父级的_的方法
    const _ = super._;
    //内容可视区域的盒子 元素
    const container = $(containerCss);
    // 滚动条的子项
    const item = _(containerItemCss);
    // 第一个子项的宽度等于子项的宽度加上右边距的距离
    // 内容总宽度
    let itemWidthNum = Array.from(item).reduce((prev, el, index) => {
      return prev + item[index].offsetWidth + window.getComputedStyle(item[index]).marginRight.replace('px', '') * 1 + window.getComputedStyle(item[index]).marginLeft.replace('px', '') * 1;
    }, 0);
    // 滚动条的滑道宽度
    let scrollWidth = container.clientWidth / itemWidthNum;
    scrollWidth = scrollWidth > 1 ? 1 : scrollWidth;

    // 修改滚动条的宽度
    $(scrollBarItemCss).style.width = scrollWidth * 100 + '%';
    //可视区容器的事件
    container.addEventListener('touchstart', function (e) {
      //标记
      flag = true;
      // 按下的x轴坐标
      downX = e.touches[0].clientX;
      // 滚动条的x轴坐标
      scrollX = this.scrollLeft;
    });
    container.addEventListener('touchmove', function (e) {
      // 判断是否抬起手指
      if (flag) {
        // 移动时的X坐标
        moveX = e.touches[0].clientX;
        // scrollLeft的x坐标等于按下时的滚动条x坐标减（移动的x坐标-按下的x坐标）
        let sl = scrollX - (moveX - downX);
        // 给当前的滚动条赋值
        this.scrollLeft = sl;
        //计算有效宽度=总宽度-容器宽度+(小滚动条的宽度)
        let valWidth = itemWidthNum - container.clientWidth + this.scrollWidth * scrollWidth;
        $(scrollBarItemCss).style.left = (this.scrollLeft / valWidth) * 100 + '%';
      }
    });
    // 调用惯性滚动监听事件
    const inertanceScroll = new InertanceScrollListener({
      container: containerCss,
      ingCallBack() {
        //计算有效宽度=总宽度-容器宽度+(小滚动条的宽度)
        let valWidth = itemWidthNum - container.clientWidth + container.scrollWidth * scrollWidth;
        $(scrollBarItemCss).style.left = (container.scrollLeft / valWidth) * 100 + '%';
      },
      endCallBack() {}
    });
  }

  //下方滚动条的拖拽事件
  scrollBottomEventHandler(scrollBarCss, scrollBarItemCss, targetActionCss) {
    const $ = super.$;
    const target = $(targetActionCss);
    const scrollBar = $(scrollBarCss);
    // 调用拖拽事件
    const drag = new DragMove({
      parentCss: scrollBarCss,
      childCss: scrollBarItemCss,
      startFn(e) {
        const tar = e.target;
        if (tar == $(scrollBarItemCss)) {
          tar.style.transform = 'scaleY(2)';
        }
      },
      moveFn(e) {
        const tar = e.target;
        if (tar == $(scrollBarItemCss)) {
          // 比例
          let ratio = tar.offsetLeft / scrollBar.offsetWidth;
          target.scrollTo(target.scrollWidth * ratio, 0);
        }
      },
      endFn(e) {
        const tar = e.target;
        if (tar == $(scrollBarItemCss)) {
          tar.style.transform = 'scaleY(1)';
        }
      }
    });
  }
  // 滚动条的点击事件
  scrollBottomClick(scrollBarCss, scrollBarItemCss, targetActionCss) {
    const $ = super.$;
    const slow = super.slow;
    const target = $(targetActionCss);
    const parent = $(scrollBarCss);
    const child = $(scrollBarItemCss);
    parent.addEventListener('touchstart', function (e) {
      if (e.target === this) {
        let x, w;
        w = this.clientWidth - child.clientWidth;
        x = e.touches[0].clientX - this.offsetLeft;
        if (x < 0) x = 0;
        if (x > w) x = w;
        child.style.left = x + 'px';
        let ratio = child.offsetLeft / parent.offsetWidth;
        // 调用过渡函数工具
        slow({
          val: target.scrollLeft,
          toVal: parseInt(target.scrollWidth * ratio),
          callback(valX) {
            target.scrollTo(valX, 0);
          },
          controlSpeed: 8
        });
      }
    });
  }
}
// 使用方式
// const scrollBar = new ScrollBarEventListener({
//     containerCss: '.container',
//     containerItemCss: '.containerItem',
//     scrollBarCss: '.scrollBar',
//     scrollBarItemCss: '.scrollBarItem'
//   });
/**
 * 移动端滚动条联动
 * 结构
 * <div class="box" style="width:80%;margin:0 auto">
      <div class="container" style="width: 100%;overflow-x: auto">
        <ul style="display: flex;flex-wrap: nowrap;justify-content: flex-start;list-style: none;padding:0">
          <li class="containerItem" style="margin-right:10px;background-color:red;height:300px;">
            <div style="width:400px;"></div>
          </li>
          <li class="containerItem" style="margin-right:10px;background-color:red;height:300px;">
            <div style="width:400px;"></div>
          </li>
          <li class="containerItem" style="background-color:red;height:300px;">
            <div style="width:400px;"></div>
          </li>
        </ul>
      </div>
      <div class="scrollContainer" style="width: 100%;height: 48px;margin-top: 60px;">
        <p class="scrollBar" style="position: relative;background-color: #dfdfdf;height: 10px;">
          <span class="scrollBarItem" style="position: absolute;left: 0;top: 0;height: 100%;background-color: #111;"></span>
        </p>
      </div>
      </div>
*/
// 使用者定义的倒计时
class UserDefinedTime extends WXY {
  nowTime() {
    this.nowTimes = new Date();
    return this.nowTimes;
  }

  startTime(start) {
    this.startTimes = new Date(start);
    return this.startTimes;
  }

  endTime(end) {
    this.endTimes = new Date(end);
    return this.endTimes;
  }

  countTime(type) {
    switch (type) {
      case 'start':
        this.TIME = (this.startTimes - this.nowTimes) / 1000;
        break;
      case 'end':
        this.TIME = (this.endTimes - this.nowTimes) / 1000;
        break;
    }
    this.D = parseInt(this.TIME / (3600 * 24));
    this.H = parseInt((this.TIME % (3600 * 24)) / 3600);
    this.M = parseInt((this.TIME % 3600) / 60);
    this.S = parseInt(this.TIME % 60);
    return this.TIME;
  }

  /**
   * [conditionalJudgment 条件判断]
   */
  conditionalJudgment(start, end) {
    this.nowTime();
    this.startTime(start);
    this.endTime(end);
    if (this.nowTimes >= this.startTimes) {
      this.countTime('end');
      if (this.D <= 0 && this.H <= 0 && this.M <= 0 && this.S <= 0) {
        clearInterval(this.timeTT);
        return ['stop', '00', '00', '00', '00'];
      }
      if (this.D > 0 || this.H > 0 || this.M > 0 || this.S > 0) {
        return ['end', this.zeroIze(this.D), this.zeroIze(this.H), this.zeroIze(this.M), this.zeroIze(this.S)];
      }
    } else {
      this.countTime('start');
      return ['start', this.zeroIze(this.D), this.zeroIze(this.H), this.zeroIze(this.M), this.zeroIze(this.S)];
    }
  }

  /**
   * [zeroIze 补零]
   */
  zeroIze(num) {
    return num < 10 ? '0' + num : num;
  }

  init({ startTime, endTime, callback } = {}) {
    clearInterval(this.timeTT);
    this.timeTT = setInterval(() => {
      callback && callback(this.conditionalJudgment(startTime, endTime));
    }, 1000);
  }
}

// 选项卡
// 结构
// <div id="tabContainer">
//     <ul class="tabList" style="display: flex;list-style: none;height: 300px;align-items:center">
//       <li class="tabLis">
//         <a class="tabLink" style="padding:20px;border:1px solid #ccc;margin:10px">1</a>
//       </li>
//       <li class="tabLis">
//         <a class="tabLink" style="padding:20px;border:1px solid #ccc;margin:10px">2</a>
//       </li>
//       <li class="tabLis">
//         <a class="tabLink" style="padding:20px;border:1px solid #ccc;margin:10px">3</a>
//       </li>
//       <li class="tabLis">
//         <a class="tabLink" style="padding:20px;border:1px solid #ccc;margin:10px">4</a>
//       </li>
//     </ul>
//   </div>
class TabControl extends WXY {
  /**
   * [constructor description]
   * @param  {[type]} options.container 容器
   * @param  {[type]} options.tab        容器内的要操作的子元素
   * @param  {[type]} options.on         要添加的类名
   * @param  {Object} options.callback} 切换时的回调函数
   * @return {[type]}                    无
   */
  constructor({ container, tab, on, callback } = {}) {
    super();
    const $ = super.$;
    const _ = super._;
    this.container = $(container);
    this.tab = _(tab);
    this.tabHandler(tab, on, callback);
  }
  tabHandler(tab, on, callback) {
    const $ = super.$;
    const _ = super._;
    this.tab[0].classList.add(on);
    this.container.addEventListener('touchstart', function (e) {
      let tar = e.target;
      let tabClassName = tab.replace('.', '');
      if (tar.classList.contains(tabClassName)) {
        $('.' + on).classList.remove(on);
        tar.classList.add(on);
        callback && callback(tar);
      }
    });
  }
}

/**
 * ————————————————————————————————————————————————————————————————————————
 * ————————————————————————————————————————————————————————————————————————
 */
/**
 * ————————————————————————————————
 * 插件方法集合
 * ————————————————————————————————
 */
const wxy = new WXY();
/**
 * ————————————————————————————————
 * 轮播图调用方法
 * ————————————————————————————————
 */
// const bannerTools = new BannerTools(
//   pm.$(".banner"),
//   pm.$(".ban_list"),
//   pm._(".ban_lis"),
//   pm.$(".ban_btnList"),
//   pm._(".ban_btnLis"),
//   pm.$(".prev"),
//   pm.$(".next"),
//   "on",
//   "xb",
//   "index",
//   ".ban_lis"
// );
// bannerTools.init();
//html:--
// <div class="banner">
//   <div class="btn next">></div>
//   <div class="btn prev"><</div>
//   <ul class="ban_list" style="position:absolute;left:0;top:0;display:flex;">      图片容器
//     <li class="ban_lis" index="0" style="width:500px;">
//         <img style="width:100%;" src="" alt="" />
//     </li>
//   </ul>
//   <ul class="ban_btnList">   小圆点
//     <li xb="0" class="ban_btnLis on"></li>
//   </ul>
//   <div class="progress">     进度条
//     <div class="item"></div>
//   </div>
// </div>
/**
 * ————————————————————————————————
 * countDown 自定义倒计时调用方法
 * ————————————————————————————————
 */
//添加到window
// globalThis.CountDown = Object.assign(
//   {},
//   {
//     time: new CountDownTime()
//   }
// );
// CountDown.time.init({
//   countDownTime: 2,
//   elVal: '09:52',
//   callback(timeArr) {
//     console.log(timeArr);
//   }
// });
const countDownTime = new CountDownTime();
// countDownTime.init({
//   countDownTime: 2,
//   elVal: '09:52',
//   callback(timeArr) {
//     console.log(timeArr);
//   }
// });

const userTime = new UserDefinedTime();
// userTime.init({
//   startTime: '2022/5/26 09:34:40',
//   endTime: '2022/5/26 09:35:10',
//   callback(time) {
//     let str = '';
//     if (time[0] == 'start') {
//       str = time.shift().replace('start', '距离开始还剩');
//     }
//     if (time[0] == 'end') {
//       str = time.shift().replace('end', '距离结束还剩');
//     }
//     if (time[0] == 'stop') {
//       str = time.shift().replace('stop', '已结束');
//     }
//     console.log(time, str);
//   }
// });

/**
 * ————————————————————————————————
 * indexDB 调用方法
 * ————————————————————————————————
 */
//---------------调用方式
// globalThis.sIndexDB= Object.assign({}, {
//   createIndexedDB: new StoreIndexDB({
//     dbName: 'info',
//     dbVersion: 10,
//     listName: ['1907A', '1908A', '1909A', '1910A', '2008B']
//   })
// })

//   const idb=new Promise((resolve,reject)=>{
//     sIndexDB.createIndexedDB.init(resolve);
//   })
//   idb.then(val=>console.log(val))
//   console.log(sIndexDB)

/**
 * ————————————————————————————————
 * rem适配
 * ————————————————————————————————
 */
const rem = new RemAdaptive();
// rem.init();
/**
 * ————————————————————————————————
 * 懒加载
 * ————————————————————————————————
 * */
const laz = new LazyLoading();
// laz.init("img", "url")

/**
 * ————————————————————————————————
 * 图片瀑布流
 * ————————————————————————————————
 */
const falls = new Falls();
//调用方式
// falls.init({
//   containers: pm._(".box"),
//   imgArr: ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png"],
//   imgNumS: 20,
//   dataName: "src",
//   distance: 10000
// })
/**
 * ————————————————————————————————
 * 模糊查询四种方法
 * ————————————————————————————————
 */
const fuzzySearch = new FuzzySearch();
/**
 * ————————————————————————————————
 * js数组Arr工具类
 * ————————————————————————————————
  判断一个元素是否在数组中
  遍历元素：相当于原生forEach方法
  遍历元素,对里面的每个值做处理再返回一个新的值：相当于原生map方法
  数组排序：从小到大、从大到小、随机
  去重
  求两个集合的并集
  求两个集合的交集
  删除其中一个元素
  最大值
  最小值
  求和
  平均值
 */
const myArrayFn = new MyArrayFn();
/*
var arr = [1, 2, 3, 4, 5, 6];
console.log('测试判断一个元素是否在数组中(contains): ', myArrayFn.contains(arr, 5));
console.log('测试判断一个元素是否在数组中(contains): ', myArrayFn.contains(arr, 10));
var a = "";
myArrayFn.each(arr, function(element) {
    a = a + " " + element;
})
console.log('测试遍历数组的方法(each): ', a);
var b = myArrayFn.map(arr, function(element) {
    return element * 2;
}, arr)
console.log('测试将数组中每个元素*2(map): ', b);
console.log('测试排序倒序(sort): ', myArrayFn.sort(arr, 2));
console.log('测试排序顺序(sort): ', myArrayFn.sort(arr, 1));

var arr2 = [4, 4, 5, 6, 7, 8]

console.log('测试去重(unique): ', myArrayFn.unique(arr2));
console.log('测试求两个数组并集(union): ', myArrayFn.union(arr, arr2));
console.log('测试求最大值(max): ', myArrayFn.max(arr));
console.log('测试求最小值(min): ', myArrayFn.min(arr));
console.log('测试求和(sum): ', myArrayFn.sum(arr));
console.log('测试平均值(average): ', myArrayFn.average(arr));
console.log('测试删除指定元素5(remove) :>> ', myArrayFn.remove(arr, 5));
*/

/**
 *————————————————————————————————————
 * js字符串校验工具类
 *————————————————————————————————————
  是否为字符串
  是否为数字
  是否为boolean
  是否为函数
  是否为为null
  是否为undefined
  是否为对象
  是否为数组
  是否为时间
  是否为正则
  是否为错误对象
  是否为Symbol函数
  是否为Promise对象
  是否为Set对象
  对象为空(false)
  对象不为空(true)
  是否为Ios端
  是否为Android端
  是否为PC端
  是否为微信浏览器
  获取浏览器内核
  严格的身份证校验
  校验字符串是否为以下类型(手机号码、座机、身份证、密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线、邮政编码、QQ号、邮箱、金额(小数点2位)、网址、IP、日期时间、数字、英文、中文、小写、大写、HTML标记)
 */
const typeFn = new TypeFn();
/**
 *————————————————————————————————————
 * js时间Date工具类
 *————————————————————————————————————
 返回指定长度的月份集合(该月前/后几个月份的日期)
  返回指定长度的天数集合(该天前/后几个天日期)
  秒数转字符串(formatHMS(3610) =>1h0m10s)
  获取某月有多少天
  获取某年有多少天
  获取某年的第一天
  获取某年最后一天
  获取某个日期是当年中的第几天
  获取某个日期在这一年的第几周
 */
const dataFn = new DateFn();
/**
 *————————————————————————————————————
 * js浏览器存储相关操作工具类
 *————————————————————————————————————
  设置cookie
  获取cookie
  删除cookie
  设置localStorage
  获取localStorage
  移除localStorage
  移除所有localStorage
  设置sessionStorage
  获取sessionStorage
  移除sessionStorage
  移除所有sessionStorage
 */
const storageFn = new StorageFn();
/**
 *————————————————————————————————————
 * js字符串工具类
 *————————————————————————————————————
  去除空格(1：所有空格 2：前后空格 3：前空格 4：后空格)
  字符串转换(1：首字母大写 2：首页母小写 3：大小写转换 4：全部大写 5：全部小写)
  检测密码强度(0级、1级、2级、3级、4级)
  过滤html代码(把<>转换)
 */
const stringFn = new StringFn();
/**
 *————————————————————————————————————
 * js数字相关操作工具类
 *————————————————————————————————————
  随机数范围获取随机数
  将阿拉伯数字翻译成中文的大写数字
  将数字转换为大写金额
 */
const numberFn = new NumberFn();
/*
测试NumberFn中的所有方法
var numberFn = new NumberFn();
var num = numberFn.random(0, 99999999);
console.log('获取一个随机数(random) :>> ', num);
console.log('将阿拉伯数字翻译成中文的大写数字(numberToChinese) :>> ', numberFn.numberToChinese(num));
console.log('将数字转换为大写金额(changeToChinese) :>> ', numberFn.changeToChinese(num));

*/
/**
 *————————————————————————————————————
 *js base64编码工具方法
 *————————————————————————————————————
  Base64编码的作用
由于某些系统中只能使用ASCII字符。Base64就是用来将非ASCII字符的数据转换成ASCII字符的一种方法。
Base64其实不是安全领域下的加密解密算法，而是一种编码，也就是说，它是可以被翻译回原来的样子。它并不是一种加密过程。所以base64只能算是一个编码算法，对数据内容进行编码来适合传输。虽然base64编码过后原文也变成不能看到的字符格式，但是这种方式很初级，很简单。

使用Base64编码原因
1.base64是网络上最常见的用于传输8bit字节代码的编码方式之一。
有时我们需要把二进制数据编码为适合放在URL中的形式。这时采用base64编码具有不可读性，即所编码的数据不会被人直接看出。
2.用于在http环境下传递较长的标识信息。
 */
const base64 = new Base64();
/*
测试base64方法
var base64 = new Base64();
console.log(base64.encode("如我西沉"));
console.log(base64.decode("5aaC5oiR6KW/5rKJ"));
*/
/**
 *————————————————————————————————————
 * js原生dom节点操作工具类
 *————————————————————————————————————
  检测是否含有类名
  添加类名
  删除类名
  替换类名
  获取兄弟节点
  获取行间样式属性
 */
const domFn = new DomFn();
/**
 *————————————————————————————————————
 * js原生http请求工具类
 *————————————————————————————————————
  传统Ajax是利用XMLHttpRequest(XHR)发送请求获取数据，不注重分离的原则。
  而Fetch API是基于Promise设计，专为解决XHR问题而出现。

  工具类方法
  原生ajax请求方法封装
  原生fetchHttp请求方法封装
 */
const requestFn = new RequestFn();

/**
 *————————————————————————————————————
 * 移动端的惯性滚动监听
 *————————————————————————————————————
 */
/**
 *————————————————————————————————————
 * js其他高频率使用的工具类
 *————————————————————————————————————
  对象深度克隆
  防抖（一定连续触发的事件，只在最后执行一次）
  节流（一段时间内只执行一次）
  圆形碰撞检测
  矩形碰撞检测
  图片压缩
  获取网址参数
  获取全部url参数,并转换成json对象
  删除url指定参数，返回url
  随机获取十六进制颜色
  图片加载
  音频加载
  DOM转字符串
  字符串转DOM
  光标所在位置插入字符
 */
const otherFn = new OtherFn();
/*————————————————————————————————————
 * 选项卡tab切换效果
 *————————————————————————————————————
  使用方式
 */
// const tab=Reflect.construct(TabControl,[{
//   container:"#tabContainer",
//   tab:".tabLink",
//   on:"tabOn",
//   callback(tar){
//     console.log(tar);
//   }
// }]);

export {
  TypeFn, //js字符串校验工具类
  MyArrayFn, //js数组Arr工具类
  DateFn, //js时间Date工具类
  StorageFn, //js浏览器存储相关操作工具类
  StringFn, //js字符串工具类
  NumberFn, //js数字相关操作工具类
  Base64, //js base64编码工具方法
  DomFn, //js原生dom节点操作工具类
  RequestFn, //js原生http请求工具类
  OtherFn, //js其他高频率使用的工具类
  WXY, //上方所有工具类集合————————————————————————————
  BannerTools, //无缝轮播
  CountDownTime, //自定义倒计时场次
  UserDefinedTime, //使用者自定义的倒计时，比上一个好用
  StoreIndexDB, //indexDB数据库操作
  RemAdaptive, //rem适配
  LazyLoading, //懒加载
  Falls, //图片瀑布流
  FuzzySearch, //模糊查询工具
  ResizeListener, //窗口大小监听工具类
  InertanceScrollListener, //移动端惯性滚动监听工具类
  DragMove, //移动端限制拖拽效果工具类
  ScrollBarEventListener, //移动端自定义滚动条及滚动效果组件
  TabControl //选项卡tab切换
};
export default {
  TypeFn, //js字符串校验工具类
  MyArrayFn, //js数组Arr工具类
  DateFn, //js时间Date工具类
  StorageFn, //js浏览器存储相关操作工具类
  StringFn, //js字符串工具类
  NumberFn, //js数字相关操作工具类
  Base64, //js base64编码工具方法
  DomFn, //js原生dom节点操作工具类
  RequestFn, //js原生http请求工具类
  OtherFn, //js其他高频率使用的工具类
  WXY, //上方所有工具类集合————————————————————————————
  BannerTools, //无缝轮播
  CountDownTime, //自定义倒计时场次
  UserDefinedTime, //使用者自定义的倒计时，比上一个好用
  StoreIndexDB, //indexDB数据库操作
  RemAdaptive, //rem适配
  LazyLoading, //懒加载
  Falls, //图片瀑布流
  FuzzySearch, //模糊查询工具
  ResizeListener, //窗口大小监听工具类
  InertanceScrollListener, //移动端惯性滚动监听工具类
  DragMove, //移动端限制拖拽效果工具类
  ScrollBarEventListener, //移动端自定义滚动条及滚动效果组件
  TabControl //选项卡tab切换
};

// _________________合并类的方法
function mix(...mixins) {
  class Mix {
    constructor() {
      for (let mixin of mixins) {
        copyProperties(this, new mixin()); // 拷贝实例属性
      }
    }
  }
  for (let mixin of mixins) {
    copyProperties(Mix, mixin); // 拷贝静态属性
    copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
  }

  return Mix;
}

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}

// 使用Proxy，获取实例方法的时候，自动绑定this
function selfish(target) {
  const cache = new WeakMap();
  const handler = {
    get(target, key) {
      const value = Reflect.get(target, key);
      if (typeof value !== 'function') {
        return value;
      }
      if (!cache.has(value)) {
        cache.set(value, value.bind(target));
      }
      return cache.get(value);
    }
  };
  const proxy = new Proxy(target, handler);
  return proxy;
}
// const logger = selfish(new Logger());
function promiseGetJson(url) {
  // 发送 AJAX 请求, 返回的结果是 Promise 对象
  return new Promise((resolve, reject) => {
    //1. 创建对象
    const x = new XMLHttpRequest();
    //2. 初始化
    x.open('GET', url);
    //3. 发送
    x.send();
    //4. 事件绑定
    x.addEventListener('readystatechange', function () {
      if (!Object.is(this.readyState, 4)) return;
      if (this.status >= 200 && this.status < 300) {
        //成功啦
        resolve(this.response);
      } else {
        //如果失败
        reject(this.status);
      }
    });
  });
}
