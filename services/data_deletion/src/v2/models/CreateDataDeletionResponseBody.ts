import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DataDeletionResponseItem } from "./DataDeletionResponseItem";
import { DataDeletionResponseMeta } from "./DataDeletionResponseMeta";

/**
 * The response from the create data deletion request endpoint.
 */
export class CreateDataDeletionResponseBody {
  /**
   * The created data deletion request information.
   */
  "data"?: DataDeletionResponseItem;
  /**
   * The metadata of the data deletion response.
   */
  "meta"?: DataDeletionResponseMeta;
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
      type: "DataDeletionResponseItem",
    },
    meta: {
      baseName: "meta",
      type: "DataDeletionResponseMeta",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateDataDeletionResponseBody.attributeTypeMap;
  }

  public constructor() {}
}
