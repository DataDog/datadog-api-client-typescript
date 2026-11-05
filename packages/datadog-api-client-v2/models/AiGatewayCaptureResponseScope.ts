/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Visible request filters. Provider and model tags are withheld when the caller cannot view them. An empty object or empty tags can represent a fully restricted scope; scope_restricted identifies redaction.
 */
export class AiGatewayCaptureResponseScope {
  /**
   * Exact-match request tags with lowercase keys. The reserved `model` tag is the canonical model ID, and the reserved `provider` tag is the configured connection slug. The server sets both. Custom tags come from `x-dd-tag` headers. Keys and values must not have leading or trailing white space. Values are case-sensitive.
   */
  "tags"?: { [key: string]: string };
  /**
   * UUID of a Datadog team. Matches the authorized team selected by the `x-ai-gateway-team` request header. Requests without this header do not match team-scoped overrides. Open-membership teams cannot scope overrides.
   */
  "teamId"?: string;
  /**
   * Authenticated Datadog user UUID in this organization.
   */
  "userId"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    tags: {
      baseName: "tags",
      type: "{ [key: string]: string; }",
    },
    teamId: {
      baseName: "team_id",
      type: "string",
      format: "uuid",
    },
    userId: {
      baseName: "user_id",
      type: "string",
      format: "uuid",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AiGatewayCaptureResponseScope.attributeTypeMap;
  }

  public constructor() {}
}
