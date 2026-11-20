import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMSdkConfigMatchOption } from "./RUMSdkConfigMatchOption";
import { RUMSdkConfigTracingUrlPropagatorType } from "./RUMSdkConfigTracingUrlPropagatorType";

/**
 * Configuration for a URL that should have distributed tracing enabled.
 */
export class RUMSdkConfigTracingUrlConfig {
  /**
   * A match option used for URL or origin pattern matching.
   */
  "match": RUMSdkConfigMatchOption;
  /**
   * The list of trace propagator types to use for this URL.
   */
  "propagatorTypes": Array<RUMSdkConfigTracingUrlPropagatorType>;
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
    match: {
      baseName: "match",
      type: "RUMSdkConfigMatchOption",
      required: true,
    },
    propagatorTypes: {
      baseName: "propagator_types",
      type: "Array<RUMSdkConfigTracingUrlPropagatorType>",
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
    return RUMSdkConfigTracingUrlConfig.attributeTypeMap;
  }

  public constructor() {}
}
