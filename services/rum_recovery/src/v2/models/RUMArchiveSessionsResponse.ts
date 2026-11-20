import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMArchiveSession } from "./RUMArchiveSession";
import { RUMArchiveSessionsMeta } from "./RUMArchiveSessionsMeta";

/**
 * JSON:API document.
 */
export class RUMArchiveSessionsResponse {
  /**
   * Archived sessions.
   */
  "data": Array<RUMArchiveSession>;
  /**
   * Search metadata.
   */
  "meta": RUMArchiveSessionsMeta;
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
      type: "Array<RUMArchiveSession>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RUMArchiveSessionsMeta",
      required: true,
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
    return RUMArchiveSessionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
