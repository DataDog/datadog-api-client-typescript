import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A daily per-engineer engagement signal that [AI Impact](https://docs.datadoghq.com/delivery_performance/ai_impact/) uses to attribute AI-assisted pull requests.
 */
export class OpenAICodexDoraIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `true`; set to `false` to stop collection.
   */
  "enabled"?: boolean;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpenAICodexDoraIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
