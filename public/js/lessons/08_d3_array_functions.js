var data = [5, 30, 50, 15];
data.sort(d3.descending); // [5, 15, 30, 50]
d3.min(data); // 5
d3.max(data); // 50
d3.extent(data); // [5, 50]
d3.sum(data); // 100
d3.mean(data); // 25 - среднее значение
d3.median(data); // 22.5 - медиана, полусумма двух средних значений отсортированного массива (15, 30)
d3.shuffle(data); // перемешать массив