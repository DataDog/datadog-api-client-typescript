import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMEventProcessingState } from "./RUMEventProcessingState";

/**
 * RUM event processing scale configuration.
 */
export class RUMEventProcessingScale {
  /**
   * Timestamp in milliseconds when this scale was last modified.
   */
  "lastModifiedAt"?: number;
  /**
   * Configures which RUM events are processed and stored for the application.
   */
  "state"?: RUMEventProcessingState;
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
    lastModifiedAt: {
      baseName: "last_modified_at",
      type: "number",
      format: "int64",
    },
    state: {
      baseName: "state",
      type: "RUMEventProcessingState",
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
    return RUMEventProcessingScale.attributeTypeMap;
  }

  public constructor() {}
}
