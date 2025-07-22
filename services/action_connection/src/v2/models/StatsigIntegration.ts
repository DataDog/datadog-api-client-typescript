import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatsigCredentials } from "./StatsigCredentials";
import { StatsigIntegrationType } from "./StatsigIntegrationType";

/**
 * The definition of the `StatsigIntegration` object.
 */
export class StatsigIntegration {
  /**
   * The definition of the `StatsigCredentials` object.
   */
  "credentials": StatsigCredentials;
  /**
   * The definition of the `StatsigIntegrationType` object.
   */
  "type": StatsigIntegrationType;
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
      type: "StatsigCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StatsigIntegrationType",
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
    return StatsigIntegration.attributeTypeMap;
  }

  public constructor() {}
}
