var EventUtil = {
    on: function(element, type, handler) {/* 添加事件 */
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {//IE  注意：此时事件处理程序会在全局作用域中运行，因此用attachEvent绑定的事件，此时在事件处理函数里的this 等于window，使用时要注意
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },

    off: function(element, type, handler) {/* 移除事件 */
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },

    getEvent: function(event) {/* 返回对event对象的引用 */
        return event ? event : window.event;
    },

    getTarget: function(event) {/* 返回事件的目标 */
        return event.target || event.srcElement;
    },

    preventDefault: function(event) { /* 取消事件的默认行为 */
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    stopPropagation: function(event) {/* 阻止事件冒泡 */
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    /* mouseover 和mouserout 这两个事件都会涉及把鼠标指针从一个元素的边界之内移动到另一个元素的边界之内。*/
    getRelatedTarget: function(event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {//IE8 mouserout事件
            return event.toElement;
        } else if (event.fromElement) {//IE8 mouseover事件
            return event.fromElement;
        } else {
            return null;//其他事件
        }
    }
};