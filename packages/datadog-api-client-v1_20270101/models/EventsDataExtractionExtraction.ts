/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventsDataExtractionExtractionType } from "./EventsDataExtractionExtractionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class EventsDataExtractionExtraction {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "pattern": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": EventsDataExtractionExtractionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    pattern: {
      baseName: "pattern",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "EventsDataExtractionExtractionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventsDataExtractionExtraction.attributeTypeMap;
  }

  public constructor() {}
}
