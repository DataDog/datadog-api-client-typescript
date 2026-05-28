/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnnotationColor } from "./AnnotationColor";
import { AnnotationKind } from "./AnnotationKind";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating or updating an annotation.
 */
export class AnnotationCreateAttributes {
  /**
   * Color used to render the annotation in the UI.
   */
  "color": AnnotationColor;
  /**
   * User-defined text attached to the annotation.
   */
  "description": string;
  /**
   * End time of the annotation in milliseconds since the Unix epoch. Required for `timeRegion` annotations; omit or set to null for `pointInTime` annotations.
   */
  "endTime"?: number;
  /**
   * ID of the page the annotation belongs to, prefixed with the page type and joined by a colon
   * (for example, `dashboard:abc-def-xyz` or `notebook:1234567890`).
   */
  "pageId": string;
  /**
   * Start time of the annotation in milliseconds since the Unix epoch.
   */
  "startTime": number;
  /**
   * Kind of annotation. `pointInTime` annotations mark a single moment in time,
   * while `timeRegion` annotations span a window of time and require an `end_time`.
   */
  "type": AnnotationKind;
  /**
   * IDs of widgets the annotation is associated with. When empty or omitted, the annotation applies to the whole page.
   */
  "widgetIds"?: Array<string>;

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
    color: {
      baseName: "color",
      type: "AnnotationColor",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    endTime: {
      baseName: "end_time",
      type: "number",
      format: "int64",
    },
    pageId: {
      baseName: "page_id",
      type: "string",
      required: true,
    },
    startTime: {
      baseName: "start_time",
      type: "number",
      required: true,
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "AnnotationKind",
      required: true,
    },
    widgetIds: {
      baseName: "widget_ids",
      type: "Array<string>",
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
    return AnnotationCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
