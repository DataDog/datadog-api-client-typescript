/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPromptTemplate } from "./LLMObsPromptTemplate";
import { LLMObsPromptVersionLabel } from "./LLMObsPromptVersionLabel";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating a new version of an Agent Observability prompt. `template` is required; all other attributes are optional. If `config` is omitted, the latest version's configuration is carried forward. An explicit empty object clears it.
 */
export class LLMObsCreatePromptVersionDataAttributes {
  /**
   * Customer-owned configuration delivered with a prompt version. Datadog stores and returns the object without interpolating it, validating provider-specific keys, or applying it to model calls. Do not include secrets.
   */
  "config"?: { [key: string]: any };
  /**
   * Optional description of this version.
   */
  "description"?: string;
  /**
   * Optional feature-flag environment UUIDs the service attempts to enable and configure to use this version as their default after creation.
   */
  "envIds"?: Array<string>;
  /**
   * Optional labels to attach to this version. Do not use this attribute for new integrations.
   */
  "labels"?: Array<LLMObsPromptVersionLabel>;
  /**
   * A text template or a list of chat messages.
   */
  "template": LLMObsPromptTemplate;
  /**
   * Optional user-supplied version identifier for this version.
   */
  "userVersion"?: string;

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
    config: {
      baseName: "config",
      type: "{ [key: string]: any; }",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    envIds: {
      baseName: "env_ids",
      type: "Array<string>",
    },
    labels: {
      baseName: "labels",
      type: "Array<LLMObsPromptVersionLabel>",
    },
    template: {
      baseName: "template",
      type: "LLMObsPromptTemplate",
      required: true,
    },
    userVersion: {
      baseName: "user_version",
      type: "string",
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
    return LLMObsCreatePromptVersionDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
