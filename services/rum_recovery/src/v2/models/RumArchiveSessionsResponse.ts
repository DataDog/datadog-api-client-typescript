import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumArchiveSession } from "./RumArchiveSession";
import { RumArchiveSessionsMeta } from "./RumArchiveSessionsMeta";

/**
 * JSON:API document.
 */
export class RumArchiveSessionsResponse {
  /**
   * Archived sessions.
   */
  "data": Array<RumArchiveSession>;
  /**
   * Search metadata.
   */
  "meta": RumArchiveSessionsMeta;
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
      type: "Array<RumArchiveSession>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RumArchiveSessionsMeta",
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
    return RumArchiveSessionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
