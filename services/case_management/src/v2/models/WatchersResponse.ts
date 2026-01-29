import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Watcher } from "./Watcher";

/**
 * Response with case watchers
 */
export class WatchersResponse {
  /**
   * Array of watchers
   */
  "data": Array<Watcher>;
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
      type: "Array<Watcher>",
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
    return WatchersResponse.attributeTypeMap;
  }

  public constructor() {}
}
