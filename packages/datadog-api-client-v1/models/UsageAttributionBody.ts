/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageAttributionValues } from "./UsageAttributionValues";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Usage Summary by tag for a given organization.
 */
export class UsageAttributionBody {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: [YYYY-MM].
   */
  "month"?: Date;
  /**
   * The name of the organization.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
  /**
   * The source of the usage attribution tag configuration and the selected tags in the format `<source_org_name>:<selected tag 1>-<selected tag 2>-<selected tag 3>`.
   */
  "tagConfigSource"?: string;
  /**
   * Usage Summary by tag name.
   */
  "tags"?: { [key: string]: Array<string> };
  /**
   * Shows the the most recent hour in the current months for all organizations for which all usages were calculated.
   */
  "updatedAt"?: string;
  /**
   * Fields in Usage Summary by tag(s).
   */
  "values"?: UsageAttributionValues;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    month: {
      baseName: "month",
      type: "Date",
      format: "date-time",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    tagConfigSource: {
      baseName: "tag_config_source",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "{ [key: string]: Array<string>; }",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "string",
    },
    values: {
      baseName: "values",
      type: "UsageAttributionValues",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageAttributionBody.attributeTypeMap;
  }

  public constructor() {}
}
