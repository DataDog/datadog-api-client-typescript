import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SplitCredentialsUpdate } from "./SplitCredentialsUpdate";
import { SplitIntegrationType } from "./SplitIntegrationType";

/**
 * The definition of the `SplitIntegrationUpdate` object.
 */
export class SplitIntegrationUpdate {
  /**
   * The definition of the `SplitCredentialsUpdate` object.
   */
  "credentials"?: SplitCredentialsUpdate;
  /**
   * The definition of the `SplitIntegrationType` object.
   */
  "type": SplitIntegrationType;
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
    credentials: {
      baseName: "credentials",
      type: "SplitCredentialsUpdate",
    },
    type: {
      baseName: "type",
      type: "SplitIntegrationType",
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
    return SplitIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
