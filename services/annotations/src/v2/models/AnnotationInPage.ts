import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnnotationColor } from "./AnnotationColor";
import { AnnotationKind } from "./AnnotationKind";

/**
 * A flat annotation object as it appears within a page annotations response.
 */
export class AnnotationInPage {
  /**
   * Identifier of the user who created the annotation.
   */
  "authorId": string;
  /**
   * Color used to render the annotation in the UI.
   */
  "color": AnnotationColor;
  /**
   * Creation time of the annotation in milliseconds since the Unix epoch.
   */
  "createdAt": number;
  /**
   * User-defined text attached to the annotation.
   */
  "description": string;
  /**
   * End time of the annotation in milliseconds since the Unix epoch. Null for `pointInTime` annotations.
   */
  "endTime": number | null;
  /**
   * Unique identifier of the annotation.
   */
  "id": string;
  /**
   * Last modification time of the annotation in milliseconds since the Unix epoch.
   */
  "modifiedAt": number;
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
    authorId: {
      baseName: "author_id",
      type: "string",
      required: true,
    },
    color: {
      baseName: "color",
      type: "AnnotationColor",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "number",
      required: true,
      format: "int64",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    endTime: {
      baseName: "end_time",
      type: "number",
      required: true,
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "number",
      required: true,
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
    return AnnotationInPage.attributeTypeMap;
  }

  public constructor() {}
}
