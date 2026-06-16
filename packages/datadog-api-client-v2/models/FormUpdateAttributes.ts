/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormDatastoreConfigAttributes } from "./FormDatastoreConfigAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The fields to update on a form. At least one field must be provided.
 */
export class FormUpdateAttributes {
  /**
   * The datastore configuration for a form.
   */
  "datastoreConfig"?: FormDatastoreConfigAttributes;
  /**
   * The updated description of the form.
   */
  "description"?: string;
  /**
   * The updated name of the form.
   */
  "name"?: string;

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
    datastoreConfig: {
      baseName: "datastore_config",
      type: "FormDatastoreConfigAttributes",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return FormUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
