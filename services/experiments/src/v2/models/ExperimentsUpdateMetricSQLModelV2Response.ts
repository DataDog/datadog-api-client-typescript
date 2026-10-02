import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsMetricSQLModelV2DTOData } from "./ExperimentsMetricSQLModelV2DTOData";
import { ExperimentsUpdateMetricSQLModelV2ResponseMeta } from "./ExperimentsUpdateMetricSQLModelV2ResponseMeta";

/**
 * Updated metric SQL model and its removed entries.
 */
export class ExperimentsUpdateMetricSQLModelV2Response {
  /**
   * JSON:API resource containing the metric SQL model identity and fields.
   */
  "data": ExperimentsMetricSQLModelV2DTOData;
  /**
   * Model entries removed by the update. Empty arrays mean no entries were removed.
   */
  "meta"?: ExperimentsUpdateMetricSQLModelV2ResponseMeta;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "ExperimentsMetricSQLModelV2DTOData",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ExperimentsUpdateMetricSQLModelV2ResponseMeta",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ExperimentsUpdateMetricSQLModelV2Response.attributeTypeMap;
  }

  public constructor() {}
}
