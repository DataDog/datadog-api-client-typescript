import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppCreatePipelineEventRequestAttributesResource } from "./CIAppCreatePipelineEventRequestAttributesResource";

/**
 * Attributes of the pipeline event to create.
 */
export class CIAppCreatePipelineEventRequestAttributes {
  /**
   * The Datadog environment.
   */
  "env"?: string;
  /**
   * The name of the CI provider. By default, this is "custom".
   */
  "providerName"?: string;
  /**
   * Details of the CI pipeline event.
   */
  "resource": CIAppCreatePipelineEventRequestAttributesResource;
  /**
   * If the CI provider is SaaS, use this to differentiate between instances.
   */
  "service"?: string;
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
    env: {
      baseName: "env",
      type: "string",
    },
    providerName: {
      baseName: "provider_name",
      type: "string",
    },
    resource: {
      baseName: "resource",
      type: "CIAppCreatePipelineEventRequestAttributesResource",
      required: true,
    },
    service: {
      baseName: "service",
      type: "string",
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
    return CIAppCreatePipelineEventRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
