import { ObjectSerializer as ObjectSerializerV1 } from '../../packages/datadog-api-client-v1/models/ObjectSerializer';

test('TestDeserializationOfInvalidDates', () => {
  const data = `
  {
    "usage":[
       {
          "org_name":"DD Integration Tests (321813)",
          "public_id":"fasjyydbcgwwc2uc",
          "tag_config_source":"DD Integration Tests (321813):::project",
          "tags":null,
          "updated_at":"2023-02-0",
          "month":"2023-02-01T00:00:00+00:00",
          "values":{
             "infra_host_usage":44
          }
       }
    ],
    "metadata":{
       "pagination":{
          "next_record_id":null
       },
       "aggregates":[
          {
             "field":"infra_host_usage",
             "value":45.0,
             "agg_type":"sum"
          }
       ]
    }
  }
  `;


  const result = ObjectSerializerV1.deserialize(
    ObjectSerializerV1.parse(data, "application/json"),
    "MonthlyUsageAttributionResponse",
    "");

    // Invalid dates should be deserialized into an Invalid Date instance
    expect(result.usage[0].updatedAt).toBeNaN;
  }
);