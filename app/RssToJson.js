/**
 * Created by phuonganh on 24/08/2016.
 */
'use strict';
import _ from 'lodash'
var Api = {
    fetchRss(url) {
        if (!(/^http:\/\//.test(url))) {
            url = "http://" + url;
        }

        var GOOGLE_FEED_API_URL = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=-1&q=';
        var url = GOOGLE_FEED_API_URL + encodeURIComponent(url);

        return fetch(url).then((res) => res.json());
    },
    fetchRss2(url){
        const qTpl = _.template('select * from rss where url=<%=url%>')
        const q = qTpl({url : url})
        const yqlTpl  = _.template('https://query.yahooapis.com/v1/public/yql?q=<%=q%>')
        const yql = yqlTpl({q : encodeURIComponent(q)})
        return fetch(yql).then((res) => res.json());
    }
};

module.exports = Api;