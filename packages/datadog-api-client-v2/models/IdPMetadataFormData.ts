/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * The form data submitted to upload IdP metadata
 */
export class IdPMetadataFormData {
  /**
   * The IdP metadata XML file
   */
  "idpFile"?: HttpFile;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    idpFile: {
      baseName: "idp_file",
      type: "HttpFile",
      format: "binary",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IdPMetadataFormData.attributeTypeMap;
  }

  public constructor() {}
}
