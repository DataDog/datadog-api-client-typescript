import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsExposureSQLModelV2DTOData } from "./ExperimentsExposureSQLModelV2DTOData";
import { ExperimentsUpdateExposureSQLModelV2ResponseMeta } from "./ExperimentsUpdateExposureSQLModelV2ResponseMeta";

/**
 * Updated exposure SQL model and its removed entries.
 */
export class ExperimentsUpdateExposureSQLModelV2Response {
  /**
   * Exposure SQL model resource with its identifier and configuration.
   */
  "data": ExperimentsExposureSQLModelV2DTOData;
  /**
   * Removed model entries. Present only when the update removes an entry.
   */
  "meta"?: ExperimentsUpdateExposureSQLModelV2ResponseMeta;
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
      type: "ExperimentsExposureSQLModelV2DTOData",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ExperimentsUpdateExposureSQLModelV2ResponseMeta",
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
    return ExperimentsUpdateExposureSQLModelV2Response.attributeTypeMap;
  }

  public constructor() {}
}
