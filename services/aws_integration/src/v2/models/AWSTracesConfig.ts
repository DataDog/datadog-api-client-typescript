import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { XRayServicesList } from "./XRayServicesList";

/**
 * AWS Traces Collection config.
 */
export class AWSTracesConfig {
  /**
   * AWS X-Ray services to collect traces from. Defaults to `include_only`.
   */
  "xrayServices"?: XRayServicesList;
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
    xrayServices: {
      baseName: "xray_services",
      type: "XRayServicesList",
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
    return AWSTracesConfig.attributeTypeMap;
  }

  public constructor() {}
}
