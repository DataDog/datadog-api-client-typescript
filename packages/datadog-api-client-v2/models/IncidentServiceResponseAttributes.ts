/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The incident service's attributes from a response.
 */
export class IncidentServiceResponseAttributes {
  /**
   * Timestamp of when the incident service was created.
   */
  "created"?: Date;
  /**
   * Timestamp of when the incident service was modified.
   */
  "modified"?: Date;
  /**
   * Name of the incident service.
   */
  "name"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    created: {
      type: "Date",
      format: "date-time",
    },
    modified: {
      type: "Date",
      format: "date-time",
    },
    name: {
      type: "string",
    },
  };
}
