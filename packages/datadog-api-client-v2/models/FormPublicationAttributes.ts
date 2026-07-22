/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The attributes of a form publication.
*/
export class FormPublicationAttributes {
  /**
   * The time at which the publication was created.
  */
  "createdAt": Date;
  /**
   * The ID of the form.
  */
  "formId": string;
  /**
   * The version number that was published.
  */
  "formVersion": number;
  /**
   * The ID of the form publication.
  */
  "id"?: string;
  /**
   * The time at which the publication was last modified.
  */
  "modifiedAt": Date;
  /**
   * The ID of the organization that owns this publication.
  */
  "orgId": number;
  /**
   * The sequential publication number for this form.
  */
  "publishSeq": number;
  /**
   * The ID of the user who created this publication.
  */
  "userId": number;
  /**
   * The UUID of the user who created this publication.
  */
  "userUuid": string;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "createdAt": {
      "baseName": "created_at",
      "type": "Date",
      "required": true,
      "format": "date-time",
    },
    "formId": {
      "baseName": "form_id",
      "type": "string",
      "required": true,
      "format": "uuid",
    },
    "formVersion": {
      "baseName": "form_version",
      "type": "number",
      "required": true,
      "format": "int64",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "modifiedAt": {
      "baseName": "modified_at",
      "type": "Date",
      "required": true,
      "format": "date-time",
    },
    "orgId": {
      "baseName": "org_id",
      "type": "number",
      "required": true,
      "format": "int64",
    },
    "publishSeq": {
      "baseName": "publish_seq",
      "type": "number",
      "required": true,
      "format": "int64",
    },
    "userId": {
      "baseName": "user_id",
      "type": "number",
      "required": true,
      "format": "int64",
    },
    "userUuid": {
      "baseName": "user_uuid",
      "type": "string",
      "required": true,
      "format": "uuid",
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




    return FormPublicationAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









