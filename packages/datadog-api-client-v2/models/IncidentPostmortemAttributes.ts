/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PostmortemStatus } from "./PostmortemStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The postmortem's attributes.
 */
export class IncidentPostmortemAttributes {
  /**
   * Timestamp when the postmortem was created.
   */
  "created": Date;
  /**
   * The identifier of the postmortem document within its host platform.
   */
  "documentId": string;
  /**
   * The type of document backing the postmortem (for example, `datadog_notebooks`, `confluence`, or `google_docs`). Can be empty if the document type is unknown.
   */
  "documentType": string;
  /**
   * The URL of the postmortem document.
   */
  "documentUrl": string;
  /**
   * Timestamp when the postmortem was last modified.
   */
  "modified": Date;
  /**
   * The status of the postmortem.
   */
  "status": PostmortemStatus;
  /**
   * The title of the postmortem.
   */
  "title": string;

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
    created: {
      baseName: "created",
      type: "Date",
      required: true,
      format: "date-time",
    },
    documentId: {
      baseName: "document_id",
      type: "string",
      required: true,
    },
    documentType: {
      baseName: "document_type",
      type: "string",
      required: true,
    },
    documentUrl: {
      baseName: "document_url",
      type: "string",
      required: true,
    },
    modified: {
      baseName: "modified",
      type: "Date",
      required: true,
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "PostmortemStatus",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
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
    return IncidentPostmortemAttributes.attributeTypeMap;
  }

  public constructor() {}
}
