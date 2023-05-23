const data = require('./data');
var StackArray = require('./stack.js');
const { all } = require('./routes');

// create stack for data 
var all_posts_data = new StackArray();
var all_posts_title_data = new StackArray();
var all_posts_category_data = new StackArray();
// category stack
var category_general_data = new StackArray();
var category_academic_data = new StackArray();
var category_forkids_data = new StackArray();


for (let i = 0; i < data.length;i++)
{
    all_posts_data.push(data[i]);
    all_posts_title_data.push(data[i].title);
    switch (data[i].category) {
    case "general" : category_general_data.push(data[i].category);break;
    case "academic" : category_academic_data.push(data[i].category);break;
    case "forkids" : category_forkids_data.push(data[i].category);break;
    default : break;
    }
}

all_posts_category_data.push(category_general_data.size());
all_posts_category_data.push(category_academic_data.size());
all_posts_category_data.push(category_forkids_data.size());

var max = all_posts_category_data.getMax();
var min = all_posts_category_data.getMin();
var max_title,min_title;
    switch (max)
    {
        case (category_general_data.size()) :max_title = category_general_data.peek();break;
        case (category_academic_data.size()) :max_title = category_academic_data.peek();break;
        case (category_forkids_data.size()) :max_title = category_forkids_data.peek();break;
        default:break;
    }
    switch (min)
    {
        case (category_general_data.size()) :min_title = category_general_data.peek();break;
        case (category_academic_data.size()) :min_title = category_academic_data.peek();break;
        case (category_forkids_data.size()) :min_title = category_forkids_data.peek();break;
        default:break;
    }

const results =[
{
    size:all_posts_data.size(),
    title:all_posts_title_data.toArray(),
    top_cate:max,
    top_cate_title:max_title,
    least_cate:min,
    least_cate_title:min_title
}
]


module.exports=results;