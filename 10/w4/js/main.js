/**
 * Created by Administrator on 2017/5/8.
 */
function test(args) {
    this.a = 1;
};

test.prototype.method_name = function (first_arg) {
    console.log(this.a);
}