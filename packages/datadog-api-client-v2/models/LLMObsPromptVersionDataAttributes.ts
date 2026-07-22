/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPromptDataset } from "./LLMObsPromptDataset";
import { LLMObsPromptTemplate } from "./LLMObsPromptTemplate";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes of a specific version of an LLM Observability prompt.
*/
export class LLMObsPromptVersionDataAttributes {
  /**
   * UUID of the user who authored this version.
  */
  "author"?: string;
  /**
   * Timestamp stored on this prompt version.
  */
  "createdAt"?: Date;
  /**
   * Datasets observed in runs associated with this prompt version.
  */
  "datasets"?: Array<LLMObsPromptDataset>;
  /**
   * Description of this version.
  */
  "description"?: string;
  /**
   * Labels attached to this version (for example `development`, `staging`, `production`).
  */
  "labels"?: Array<string>;
  /**
   * Timestamp of the most recent observed run of this prompt version.
  */
  "lastSeenAt"?: Date;
  /**
   * The ML application this prompt is associated with.
  */
  "mlApp"?: string;
  /**
   * ML applications observed running this prompt version.
  */
  "mlApps"?: Array<string>;
  /**
   * Customer-provided identifier of the parent prompt.
  */
  "promptId": string;
  /**
   * Unique identifier of the parent prompt.
  */
  "promptUuid": string;
  /**
   * Tags observed on runs of this prompt version.
  */
  "tags"?: Array<string>;
  /**
   * A text template or a list of chat messages.
  */
  "template": LLMObsPromptTemplate;
  /**
   * User-supplied identifier for this version.
  */
  "userVersion"?: string;
  /**
   * Sequential version number.
  */
  "version": number;
  /**
   * Timestamp when this version was created.
  */
  "versionCreatedAt"?: Date;

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
    "author": {
      "baseName": "author",
      "type": "string",
    },
    "createdAt": {
      "baseName": "created_at",
      "type": "Date",
      "format": "date-time",
    },
    "datasets": {
      "baseName": "datasets",
      "type": "Array<LLMObsPromptDataset>",
    },
    "description": {
      "baseName": "description",
      "type": "string",
    },
    "labels": {
      "baseName": "labels",
      "type": "Array<string>",
    },
    "lastSeenAt": {
      "baseName": "last_seen_at",
      "type": "Date",
      "format": "date-time",
    },
    "mlApp": {
      "baseName": "ml_app",
      "type": "string",
    },
    "mlApps": {
      "baseName": "ml_apps",
      "type": "Array<string>",
    },
    "promptId": {
      "baseName": "prompt_id",
      "type": "string",
      "required": true,
    },
    "promptUuid": {
      "baseName": "prompt_uuid",
      "type": "string",
      "required": true,
    },
    "tags": {
      "baseName": "tags",
      "type": "Array<string>",
    },
    "template": {
      "baseName": "template",
      "type": "LLMObsPromptTemplate",
      "required": true,
    },
    "userVersion": {
      "baseName": "user_version",
      "type": "string",
    },
    "version": {
      "baseName": "version",
      "type": "number",
      "required": true,
      "format": "int64",
    },
    "versionCreatedAt": {
      "baseName": "version_created_at",
      "type": "Date",
      "format": "date-time",
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




    return LLMObsPromptVersionDataAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









