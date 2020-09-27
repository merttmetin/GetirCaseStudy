# GETIR CASE STUDY FOR REST API

Rest API Created using NodeJS and available to test as following URL.

https://getir-case-study-mm.herokuapp.com

## Endpoint
Method Type : POST
Endpoint : /getRecords`


</br>
<h4>Parameters</h4>
<table>
<thead>
<tr>
<th align="left">Name</th>
<th align="center">Type</th>
<th align="left">Description</th>
<th align="left">Is required ?</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">startDate</td>
<td align="center">string</td>
<td align="left">Format : YYYY-MM-DD</td>
<td align="left">Yes</td>
</tr>
<tr>
<td align="left">endDate</td>
<td align="center">string</td>
<td align="left">Format : YYYY-MM-DD</td>
<td align="left">Yes</td>
</tr>
<tr>
<td align="left">minCount</td>
<td align="center">string, integer</td>
<td align="left">Min value of totalCount.</td>
<td align="left">Yes</td>
</tr>
<tr>
<td align="left">maxCount</td>
<td align="center">string, integer</td>
<td align="left">Max value of totalCount</td>
<td align="left">Yes</td>
</tr>
</tbody>
</table>

<h4>Sample Request</h4>

```
{
    "startDate": "2016-04-01",
	  "endDate":"2016-05-31",
	  "minCount":4224,
	  "maxCount":4224
}
```

<h4>Sample Response</h4>

```
{
    "code": "0",
    "msg": "success",
    "records": [
        {
            "key": "mgYcQQyV",
            "createdAt": "2016-04-30T18:06:12.204Z",
            "totalCount": 4224
        },
        {
            "key": "mgYcQQyV",
            "createdAt": "2016-04-30T18:06:12.204Z",
            "totalCount": 4224
        }
    ]
}
```
