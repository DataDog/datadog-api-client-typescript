/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * All selected filters combine with AND, with one value per filter. The `model` and `provider` tags apply to each actual direct or routed attempt, including fallback destinations. Routes are not selectable filters. At least one filter is required.
 * If any matching override uses `metadata_only`, that mode applies. Otherwise, if any matching override uses `full_capture`, that mode applies. The organization default applies only when no override matches. Overrides have no priority or specificity ordering.
 */
export class AiGatewayCaptureScope {
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
    return AiGatewayCaptureScope.attributeTypeMap;
  }

  public constructor() {}
}
