/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Daily AI coding tool activity for a single user. Each entry reports whether the user was
 * active on a given day and which AI tools and models they used.
 */
export class AIImpactUserActivityAttributes {
  /**
   * The day the activity refers to, in `YYYY-MM-DD` format.
   */
  "day": string;
  /**
   * Whether the user actively used the listed AI tools on that day.
   */
  "isActive": boolean;
  /**
   * The AI models the user used on that day, for example `claude-sonnet-4.5` or `gpt-5`.
   * Values are lowercased and duplicates are removed.
   */
  "models"?: Array<string>;
  /**
   * The AI coding tools the user used on that day, for example `Claude Code`, `Cursor`, or
   * `GitHub Copilot`. Known tools are normalized to a canonical name (`claude_code`, `cursor`,
   * `copilot`), and other values are converted to snake case. Entries must not be empty.
   */
  "tools": Array<string>;
  /**
   * The email address of the user. It is case-insensitive and is matched against the
   * email addresses of commit authors.
   */
  "userEmail": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    day: {
      baseName: "day",
      type: "string",
      required: true,
    },
    isActive: {
      baseName: "is_active",
      type: "boolean",
      required: true,
    },
    models: {
      baseName: "models",
      type: "Array<string>",
    },
    tools: {
      baseName: "tools",
      type: "Array<string>",
      required: true,
    },
    userEmail: {
      baseName: "user_email",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AIImpactUserActivityAttributes.attributeTypeMap;
  }

  public constructor() {}
}
