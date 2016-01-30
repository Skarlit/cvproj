import React from 'react';
import d3 from 'd3';

var RadarChart = React.createClass({
    componentDidMount: function() {
        var data = [
            {label: 'ツン', score: 331},
            {label: '真面目', score: 200},
            {label: 'デレ', score: 200},
            {label: 'label 4', score: 400},
            {label: 'label 5', score: 300},
            {label: 'label 5', score: 500}
        ];
        var dataCount = data.length;
        var max = 0;
        for(var i = 0, delta = 2*Math.PI / dataCount; i < dataCount; i++) {
            if (data[i].score > max) max = data[i].score;
            data[i].angle = i * delta;
        }
        for(var i = 0; i < dataCount; i++) {
            data[i].ratio = data[i].score / max;
        }
        console.log(max);

        var svg = d3.select(React.findDOMNode(this.refs.svg));
        var toCenter =  "translate(" + (this.props.offset.x + this.props.r) + "," + (this.props.offset.x  + this.props.r) + ")";

        this._drawOutline(data, svg, toCenter);
        this._drawScore(data, svg, toCenter);


    },
    _chartPadding: 30,
    _drawScore: function(data, svg, center) {
        var rMax = parseInt(this.props.r);
        var scoreGroup = svg.append("g").attr("transform", center);
        var r = 0;
        var scoreLine = d3.svg.line().x(function(d) {
            return rMax * d.ratio * Math.sin(d.angle);
        }).y(function(d) {
            return -rMax * d.ratio * Math.cos(d.angle);
        });

        scoreGroup.append("path").attr("class", "score-segment").attr("d", function() {
            return d3.svg.line().x(0).y(0)(data) + "Z";
        }).attr("opacity", "0.3").transition().duration(1000).attr("d", function() {
            return scoreLine(data) + "Z";
        });
    },
    _drawOutline: function(data, svg, center) {
        var rMax = parseInt(this.props.r);
        var r = rMax;
        var outLine = d3.svg.line().x(function(d) {  // d is angles
            return r * Math.sin(d.angle);
        }).y(function(d) {
            return -r * Math.cos(d.angle);
        }).interpolate("linear");

        var polygonGroup = svg.append("g").attr("transform", center);
        var slices = this.props.slices || 5;
        r = rMax;
        for(var j = 0, delta = rMax / slices; j < slices; j++) {
            polygonGroup.append("path").attr("d", function () {return outLine(data) + "Z"}).attr("class", "polygon");
            r -= delta ;
        }


        var labelGroup = svg.append("g").attr("transform", center);
        labelGroup.selectAll("circle.label-node")
            .data(data)
            .enter()
            .append("circle")
            .attr("class", "label-node")
            .attr("cx", function(d) {
                return rMax * Math.sin(d.angle); })
            .attr("cy", function(d) {
                return - rMax * Math.cos(d.angle); })

        labelGroup.selectAll("text").data(data).enter()
            .append("text").text(function(d) {
                return d.label;})
            .attr("class", "label-text")
            .attr("x", function(d) {
                var x =  rMax * Math.sin(d.angle);
                if (x < 0) {
                    return x - 15
                } else if ( Math.round(x) == 0) {
                    return x;
                } else {
                    return x + 20;
                }})
            .attr("y", function(d) {
                var y = - rMax * Math.cos(d.angle);
                if (y > 0) {
                    return y + 20;
                } else if ( Math.round(y) == 0) {
                    return y;
                } else {
                    return y - 15;
                }});


        var diagonalGroup = svg.append("g").attr("transform", center);
        diagonalGroup.selectAll("path").data(data).enter().append("path")
            .attr("class", "diagonal")
            .attr("d", function(d) {
                var diagData = [{x: 0, y: 0}, {x: rMax*Math.sin(d.angle), y: -rMax*Math.cos(d.angle)}];
                return d3.svg.line().x(function(d) {return d.x}).y(function(d){return d.y})(diagData);
            })
    },
    render: function() {
        return <div className="radar-chart">
            <svg ref="svg" width={this.props.width} height={this.props.height}></svg>
        </div>
    }
});

var styles = {
    node: {

    },
    outlines: {

    }
};

export default RadarChart;