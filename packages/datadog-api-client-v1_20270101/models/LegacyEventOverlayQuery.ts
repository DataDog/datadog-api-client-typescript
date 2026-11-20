/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagsExecution } from "./TagsExecution";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class LegacyEventOverlayQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "q": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "tagsExecution"?: TagsExecution;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    q: {
      baseName: "q",
      type: "string",
      required: true,
    },
    tagsExecution: {
      baseName: "tags_execution",
      type: "TagsExecution",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LegacyEventOverlayQuery.attributeTypeMap;
  }

  public constructor() {}
}
