import { UnparsedObject } from "@datadog/datadog-api-client";

import { SyntheticsBasicAuthDigest } from "./SyntheticsBasicAuthDigest";
import { SyntheticsBasicAuthNTLM } from "./SyntheticsBasicAuthNTLM";
import { SyntheticsBasicAuthOauthClient } from "./SyntheticsBasicAuthOauthClient";
import { SyntheticsBasicAuthOauthROP } from "./SyntheticsBasicAuthOauthROP";
import { SyntheticsBasicAuthSigv4 } from "./SyntheticsBasicAuthSigv4";
import { SyntheticsBasicAuthWeb } from "./SyntheticsBasicAuthWeb";

/**
 * Object to handle basic authentication when performing the test.
 */
export type SyntheticsBasicAuth =
  | SyntheticsBasicAuthWeb
  | SyntheticsBasicAuthSigv4
  | SyntheticsBasicAuthNTLM
  | SyntheticsBasicAuthDigest
  | SyntheticsBasicAuthOauthClient
  | SyntheticsBasicAuthOauthROP
  | UnparsedObject;
