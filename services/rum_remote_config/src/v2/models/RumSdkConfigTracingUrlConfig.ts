import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSdkConfigMatchOption } from "./RumSdkConfigMatchOption";
import { RumSdkConfigTracingUrlPropagatorType } from "./RumSdkConfigTracingUrlPropagatorType";

/**
 * Configuration for a URL that should have distributed tracing enabled.
 */
export class RumSdkConfigTracingUrlConfig {
  /**
   * A match option used for URL or origin pattern matching.
   */
  "match": RumSdkConfigMatchOption;
  /**
   * The list of trace propagator types to use for this URL.
   */
  "propagatorTypes": Array<RumSdkConfigTracingUrlPropagatorType>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "RumSdkConfigMatchOption",
      required: true,
    },
    propagatorTypes: {
      baseName: "propagator_types",
      type: "Array<RumSdkConfigTracingUrlPropagatorType>",
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
    return RumSdkConfigTracingUrlConfig.attributeTypeMap;
  }

  public constructor() {}
}
